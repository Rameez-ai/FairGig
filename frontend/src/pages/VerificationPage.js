import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { earningsData } from "../utils/mockData";

function VerificationPage() {
  const [records, setRecords] = useState(earningsData);

  function updateStatus(id, newStatus) {
    const updated = records.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setRecords(updated);
  }

  return (
    <div className="page-wrap">
      <PageHeader
        title="Verification Panel"
        subtitle="Review uploaded records and mark them as verified, flagged, or unverifiable."
      />

      <div className="card">
        <div className="section-title-wrap">
          <h3>Submitted Earnings for Review</h3>
          <span className="soft-badge">Verifier View</span>
        </div>

        <div className="verification-list">
          {records.map((item) => (
            <div className="verification-card" key={item.id}>
              <div className="verification-top">
                <div>
                  <h4>{item.platform}</h4>
                  <p>{item.date}</p>
                </div>

                <span
                  className={`status-pill ${
                    item.status === "Verified"
                      ? "verified"
                      : item.status === "Flagged"
                      ? "flagged"
                      : "pending"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="verification-meta">
                <span>Gross: PKR {item.gross}</span>
                <span>Deductions: PKR {item.deductions}</span>
                <span>Net: PKR {item.net}</span>
              </div>

              <div className="action-group">
                <button
                  className="success-btn"
                  onClick={() => updateStatus(item.id, "Verified")}
                >
                  Approve
                </button>
                <button
                  className="warn-btn"
                  onClick={() => updateStatus(item.id, "Flagged")}
                >
                  Flag
                </button>
                <button
                  className="dark-btn"
                  onClick={() => updateStatus(item.id, "Unverifiable")}
                >
                  Unverifiable
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VerificationPage;