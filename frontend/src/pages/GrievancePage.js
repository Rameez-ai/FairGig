import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ComplaintForm from "../components/ComplaintForm";
import { grievances as initialGrievances } from "../utils/mockData";

function GrievancePage() {
  const [grievances, setGrievances] = useState(initialGrievances);
  const [form, setForm] = useState({
    platform: "",
    category: "",
    description: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newComplaint = {
      id: Date.now(),
      platform: form.platform,
      category: form.category,
      description: form.description,
      status: "Open"
    };

    setGrievances([newComplaint, ...grievances]);

    setForm({
      platform: "",
      category: "",
      description: ""
    });
  }

  return (
    <div className="page-wrap">
      <PageHeader
        title="Grievance Board"
        subtitle="Workers can report low rates, deactivations, delayed payouts, and other platform-related issues."
      />

      <div className="form-layout grievance-layout">
        <ComplaintForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <div className="card">
          <div className="section-title-wrap">
            <h3>Complaint Summary</h3>
            <span className="soft-badge">Advocacy Signals</span>
          </div>

          <div className="insight-list">
            <div className="insight-item">
              <strong>{grievances.length}</strong>
              <p>Total active board entries</p>
            </div>
            <div className="insight-item">
              <strong>Low Rates</strong>
              <p>Most repeated current complaint category</p>
            </div>
            <div className="insight-item">
              <strong>Escalation Ready</strong>
              <p>Patterns can be reviewed by advocates for clustering</p>
            </div>
          </div>
        </div>
      </div>

      <div className="complaint-grid">
        {grievances.map((item) => (
          <div className="card complaint-card" key={item.id}>
            <div className="complaint-top">
              <div>
                <h3>{item.platform}</h3>
                <p>{item.category}</p>
              </div>

              <span
                className={`status-pill ${
                  item.status === "Resolved"
                    ? "verified"
                    : item.status === "Escalated"
                    ? "flagged"
                    : "pending"
                }`}
              >
                {item.status}
              </span>
            </div>

            <p className="complaint-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GrievancePage;