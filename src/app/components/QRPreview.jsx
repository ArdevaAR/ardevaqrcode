export default function QRPreview({
  canvasRef,

  orientation,
  // ready,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  onDownload,
}) {
  return (
    <section className="preview">
      <div className="canvas-wrapper">
        <canvas
          ref={canvasRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          style={{
            cursor: "grab",
            touchAction: "none",
          }}
        />
      </div>

      <button className="download-btn" onClick={onDownload}>
        Download PNG
      </button>
    </section>
  );
}
