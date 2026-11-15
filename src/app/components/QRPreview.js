export default function QRPreview({
  canvasRef,
  status,
  orientation,
  ready,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  onDownload,
}) {
  return (
    <section className="preview">
      <div className="preview-header">
        <h2>Preview Card</h2>
        <span>{orientation}</span>
      </div>

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

      <p className="status">{status}</p>

      <button className="download-btn" onClick={onDownload} disabled={!ready}>
        Download PNG
      </button>
    </section>
  );
}
