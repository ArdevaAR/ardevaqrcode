import Image from "next/image";
import fedora from "../img/fedorai2.png";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function EditorPanel({
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
  onDownload,
}) {
  return (
    <section className="editor">
      <h2>
        Editor <span>QR Code</span>.
      </h2>

      <div className="desEditor">
        <div className="desEditor1">
          <div className="form-group">
            <label>Tuliskan url tujuan, contoh:</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Masukkan URL..."
            />
          </div>

          <div className="form-group">
            <label>Background Card</label>

            <label className="inputFile" htmlFor="background">
              Select Backround Image
            </label>
            <input
              type="file"
              accept="image/*"
              id="background"
              onChange={(e) => setBackground(e.target.files?.[0] || null)}
            />
          </div>

          <div className="form-group">
            <label>Logo QR (Opsional)</label>

            <label className="inputFile" htmlFor="logo">
              Select Logo Image
            </label>

            <input
              type="file"
              accept="image/*"
              id="logo"
              onChange={(e) => setLogo(e.target.files?.[0] || null)}
            />
          </div>
        </div>

        <div className="desEditor1">
          <div className="form-group">
            <label>Orientasi Kartu</label>

            <div className="orientation">
              <button
                type="button"
                disabled={qrOnly}
                className={`${orientation === "portrait" ? "active" : ""} ${
                  qrOnly ? "disabled" : ""
                }`}
                onClick={() => setOrientation("portrait")}
              >
                Portrait
              </button>

              <button
                type="button"
                disabled={qrOnly}
                className={`${orientation === "landscape" ? "active" : ""} ${
                  qrOnly ? "disabled" : ""
                }`}
                onClick={() => setOrientation("landscape")}
              >
                Landscape
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Mode QR Code</label>

            <div className="orientation">
              <button
                type="button"
                className={!qrOnly ? "active" : ""}
                onClick={() => setQrOnly(false)}
              >
                Card
              </button>

              <button
                type="button"
                className={qrOnly ? "active" : ""}
                onClick={() => setQrOnly(true)}
              >
                QR Only
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Ukuran QR Code: {qrSize}px</label>

            <input
              type="range"
              min="100"
              max="450"
              step="10"
              value={qrSize}
              onChange={(e) => setQrSize(Number(e.target.value))}
            />
          </div>

          <button className="download-btn" onClick={onDownload}>
            <FaCloudDownloadAlt className="iconDownload" /> Download{" "}
            {qrOnly ? "QR Code" : "PNG"}
          </button>
        </div>
      </div>

      <div className="boxBottom"></div>

      <Image className="imgEditor1" src={fedora} alt="fedora" loading="eager" />
      <Image className="imgEditor2" src={fedora} alt="fedora" loading="eager" />
    </section>
  );
}
