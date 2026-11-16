export default function QRPreview({
  canvasRef,
  orientation,
  qrOnly,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  onDownload,
}) {
  return (
    <section className={`preview ${qrOnly ? "qr-only" : ""}`}>
      <div className="canvas-wrapper">
        <canvas
          ref={canvasRef}
          onPointerDown={qrOnly ? undefined : onPointerDown}
          onPointerMove={qrOnly ? undefined : onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          style={{
            cursor: qrOnly ? "default" : "grab",
            touchAction: "none",
          }}
        />
      </div>

      <button className="download-btn" onClick={onDownload}>
        Download {qrOnly ? "QR Code" : "PNG"}
      </button>
    </section>
  );
}
