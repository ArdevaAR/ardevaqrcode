import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export function useQrCard() {
  const canvasRef = useRef(null);
  const assetsRef = useRef(null);
  const renderRef = useRef(null);

  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const verticalGuideRef = useRef(false);

  const positionRef = useRef({
    x: 160,
    y: 460,
  });

  const [text, setText] = useState("https://fedoraproject.org");

  const [background, setBackground] = useState(null);
  const [logo, setLogo] = useState(null);

  const [orientation, setOrientation] = useState("portrait");
  const [qrSize, setQrSize] = useState(280);

  const [status, setStatus] = useState("");
  // const [ready, setReady] = useState(false);
  const [qrOnly, setQrOnly] = useState(false);

  const dimensions =
    orientation === "portrait"
      ? { width: 600, height: 900 }
      : { width: 900, height: 600 };

  // Membatasi posisi QR
  function limitPosition(x, y, size) {
    return {
      x: Math.max(0, Math.min(x, dimensions.width - size)),
      y: Math.max(0, Math.min(y, dimensions.height - size)),
    };
  }

  // Render preview menggunakan aset yang tersimpan

  function renderCard() {
    const canvas = canvasRef.current;
    const assets = assetsRef.current;

    if (!canvas || !assets) return;

    const { base, qrLayer, width, height } = assets;

    // Ukuran canvas selalu mengikuti background
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, width, height);

    // Background selalu ditampilkan
    ctx.drawImage(base, 0, 0);

    if (qrOnly) {
      // Mode QR Only
      ctx.drawImage(qrLayer, 0, 0, qrSize, qrSize);
    } else {
      // Mode Card
      const pos = limitPosition(
        positionRef.current.x,
        positionRef.current.y,
        qrSize,
      );

      positionRef.current = pos;

      // Garis panduan vertikal
      if (verticalGuideRef.current && dragging.current) {
        ctx.save();

        ctx.beginPath();
        ctx.strokeStyle = "#4e95ff";
        ctx.lineWidth = 2;

        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);

        ctx.stroke();
        ctx.restore();
      }

      // Border putih QR
      const padding = 2;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(
        pos.x - padding,
        pos.y - padding,
        qrSize + padding * 2,
        qrSize + padding * 2,
      );

      // QR Code
      ctx.drawImage(qrLayer, pos.x, pos.y, qrSize, qrSize);
    }
  }

  renderRef.current = renderCard;

  // Referensi fungsi render terbaru
  renderRef.current = renderCard;

  // Load image
  function loadImage(file) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      const url = URL.createObjectURL(file);

      image.onload = () => {
        URL.revokeObjectURL(url);
        resolve(image);
      };

      image.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Gagal memuat gambar"));
      };

      image.src = url;
    });
  }

  // Generate QR Card
  useEffect(() => {
    let cancelled = false;

    async function generateCard() {
      // setReady(false);

      if (!text.trim()) {
        setStatus("Masukkan URL atau teks.");
        return;
      }

      try {
        const { width, height } = dimensions;

        // Canvas background
        const base = document.createElement("canvas");

        base.width = width;
        base.height = height;

        const ctx = base.getContext("2d");

        ctx.fillStyle = "#cfcfcf";
        ctx.fillRect(0, 0, width, height);

        // Background image
        if (background) {
          const bg = await loadImage(background);

          if (cancelled) return;

          const scale = Math.max(width / bg.width, height / bg.height);

          const bgWidth = bg.width * scale;
          const bgHeight = bg.height * scale;

          ctx.drawImage(
            bg,
            (width - bgWidth) / 2,
            (height - bgHeight) / 2,
            bgWidth,
            bgHeight,
          );
        }

        if (cancelled) return;

        ctx.restore();

        // QR Code
        const qrLayer = document.createElement("canvas");

        await QRCode.toCanvas(qrLayer, text, {
          width: qrSize,
          margin: 2,
          errorCorrectionLevel: "H",
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        });

        if (cancelled) return;

        // Logo
        if (logo) {
          const logoImage = await loadImage(logo);

          if (cancelled) return;

          const logoSize = Math.max(35, qrSize * 0.22);

          const centerX = qrSize / 2;
          const centerY = qrSize / 2;

          const logoX = centerX - logoSize / 2;
          const logoY = centerY - logoSize / 2;

          const logoCtx = qrLayer.getContext("2d");

          // Background logo
          logoCtx.fillStyle = "#fff";
          logoCtx.beginPath();

          logoCtx.roundRect(
            logoX - 5,
            logoY - 5,
            logoSize + 10,
            logoSize + 10,
            7,
          );

          logoCtx.fill();

          // Gambar logo
          logoCtx.save();

          logoCtx.beginPath();

          logoCtx.roundRect(logoX, logoY, logoSize, logoSize, 5);

          logoCtx.clip();

          const scale = Math.min(
            logoSize / logoImage.width,
            logoSize / logoImage.height,
          );

          const logoWidth = logoImage.width * scale;
          const logoHeight = logoImage.height * scale;

          logoCtx.drawImage(
            logoImage,
            centerX - logoWidth / 2,
            centerY - logoHeight / 2,
            logoWidth,
            logoHeight,
          );

          logoCtx.restore();
        }

        if (cancelled) return;

        // Simpan hasil generate
        assetsRef.current = {
          base,
          qrLayer,
          width,
          height,
        };

        // Batasi posisi QR
        positionRef.current = limitPosition(
          positionRef.current.x,
          positionRef.current.y,
          qrSize,
        );

        renderRef.current?.();

        setStatus("QR Card berhasil dibuat!");
        // setReady(true);
      } catch (error) {
        if (!cancelled) {
          setStatus(error.message || "Gagal membuat QR");
        }
      }
    }

    generateCard();

    return () => {
      cancelled = true;
    };
  }, [text, background, logo, orientation, qrSize, qrOnly]);

  // Konversi koordinat pointer
  function getCanvasPosition(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),

      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  }

  // Mulai drag
  function handlePointerDown(e) {
    // if (!ready || !assetsRef.current) return;

    const point = getCanvasPosition(e);
    const pos = positionRef.current;

    const inside =
      point.x >= pos.x &&
      point.x <= pos.x + qrSize &&
      point.y >= pos.y &&
      point.y <= pos.y + qrSize;

    if (!inside) return;

    dragging.current = true;

    dragOffset.current = {
      x: point.x - pos.x,
      y: point.y - pos.y,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.style.cursor = "grabbing";
  }

  // Gerakkan QR tanpa setState
  function handlePointerMove(e) {
    if (!dragging.current || qrOnly) return;

    const point = getCanvasPosition(e);

    // Posisi QR
    const rawX = point.x - dragOffset.current.x;
    const rawY = point.y - dragOffset.current.y;

    // Titik tengah horizontal
    const centerX = (dimensions.width - qrSize) / 2;

    // Jarak toleransi untuk snap
    const threshold = 8;

    // Deteksi apakah QR mendekati tengah
    const isCentered = Math.abs(rawX - centerX) <= threshold;

    // Aktifkan garis vertikal
    verticalGuideRef.current = isCentered;

    // Snap otomatis ke tengah
    const finalX = isCentered ? centerX : rawX;

    positionRef.current = limitPosition(finalX, rawY, qrSize);

    renderRef.current?.();
  }

  // Berhenti drag
  function handlePointerUp(e) {
    dragging.current = false;

    verticalGuideRef.current = false;

    if (e.currentTarget) {
      e.currentTarget.style.cursor = "grab";
    }

    renderRef.current?.();
  }

  // Download
  function downloadImage() {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const link = document.createElement("a");

    link.download = qrOnly ? "Nexertc-QR-Code.png" : "Nexertc-QR-Card.png";

    link.href = canvas.toDataURL("image/png");

    link.click();
  }
  return {
    canvasRef,
    text,
    setText,
    background,
    setBackground,
    logo,
    setLogo,
    orientation,
    setOrientation,
    qrSize,
    setQrSize,

    qrOnly,
    setQrOnly,

    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    downloadImage,
  };
}
