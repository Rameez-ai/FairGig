function ScreenshotUpload({ fileName, handleFileChange }) {
  return (
    <div className="card">
      <div className="section-title-wrap">
        <h3>Upload Screenshot</h3>
        <span className="soft-badge">Verification Proof</span>
      </div>

      <label className="upload-box">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <div>
          <strong>{fileName ? fileName : "Choose earnings screenshot"}</strong>
          <p>Upload platform earning screenshot for verifier review</p>
        </div>
      </label>

      <button className="primary-btn">Submit for Verification</button>
    </div>
  );
}

export default ScreenshotUpload;