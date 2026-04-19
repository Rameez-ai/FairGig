function EarningsTable({ records }) {
  return (
    <div className="card">
      <div className="section-title-wrap">
        <h3>Earnings Records</h3>
        <span className="soft-badge">Recent Logs</span>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Date</th>
              <th>Hours</th>
              <th>Gross</th>
              <th>Deductions</th>
              <th>Net</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {records.map((item) => (
              <tr key={item.id}>
                <td>{item.platform}</td>
                <td>{item.date}</td>
                <td>{item.hours}</td>
                <td>PKR {item.gross}</td>
                <td>PKR {item.deductions}</td>
                <td>PKR {item.net}</td>
                <td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EarningsTable;