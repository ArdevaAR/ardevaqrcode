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
}) {
  return (
    <section className="editor">
      <h2>
        Editor <span>QR Code</span>.
      </h2>

      <div className="desEditor">
        <div className="desEditor1">
          <div className="form-group">
            <label>URL atau Text</label>

            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Masukkan URL..."
            />
          </div>

          <div className="form-group">
            <label>Background Card</label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setBackground(e.target.files?.[0] || null)}
            />
          </div>

          <div className="form-group">
            <label>Logo QR (Opsional)</label>

            <input
              type="file"
              accept="image/*"
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
                className={orientation === "portrait" ? "active" : ""}
                onClick={() => setOrientation("portrait")}
              >
                Portrait
              </button>

              <button
                type="button"
                className={orientation === "landscape" ? "active" : ""}
                onClick={() => setOrientation("landscape")}
              >
                Landscape
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
        </div>
      </div>
    </section>
  );
}
