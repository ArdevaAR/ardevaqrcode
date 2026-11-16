export default function QRPreview({
  canvasRef,
  qrOnly,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
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
    </section>
  );
}
