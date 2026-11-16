"use client";

import EditorPanel from "./components/EditorPanel";
import QRPreview from "./components/QRPreview";
import { useQrCard } from "./hooks/useQrCard";

export default function Home() {
  const qr = useQrCard();

  return (
    <main className="container">
      {/* <header className="header">
        <h1>Nexertc QR</h1>
        <p>QR Card Generator & Editor</p>
      </header> */}

      <div className="workspace">
        <EditorPanel
          text={qr.text}
          setText={qr.setText}
          background={qr.background}
          setBackground={qr.setBackground}
          logo={qr.logo}
          setLogo={qr.setLogo}
          orientation={qr.orientation}
          setOrientation={qr.setOrientation}
          qrSize={qr.qrSize}
          setQrSize={qr.setQrSize}
        />

        <QRPreview
          canvasRef={qr.canvasRef}
          orientation={qr.orientation}
          // ready={qr.ready}
          onPointerDown={qr.handlePointerDown}
          onPointerMove={qr.handlePointerMove}
          onPointerUp={qr.handlePointerUp}
          onPointerCancel={qr.handlePointerUp}
          onDownload={qr.downloadImage}
        />
      </div>

      <footer>© 2026 Nexertc QR Generator</footer>
    </main>
  );
}
