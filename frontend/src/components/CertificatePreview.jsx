function CertificatePreview() {
  return (
    <div className="certificate-box">
      <div className="certificate-header">
        <h1>FairGig Income Certificate</h1>
        <p>Verified Worker Earnings Summary</p>
      </div>

      <div className="certificate-body">
        <div className="certificate-row">
          <span>Worker Name</span>
          <strong>Muhammad Akhtar</strong>
        </div>

        <div className="certificate-row">
          <span>Date Range</span>
          <strong>01 Apr 2026 - 15 Apr 2026</strong>
        </div>

        <div className="certificate-row">
          <span>Total Verified Earnings</span>
          <strong>PKR 10,750</strong>
        </div>

        <div className="certificate-row">
          <span>Average Weekly Earnings</span>
          <strong>PKR 5,375</strong>
        </div>

        <div className="certificate-row">
          <span>Verification Status</span>
          <strong>Verified from submitted worker records</strong>
        </div>
      </div>

      <div className="certificate-footer">
        <p>
          This document is generated from verified earnings information recorded
          through the FairGig platform.
        </p>
      </div>
    </div>
  );
}

export default CertificatePreview;