function EarningsForm({ form, handleChange, handleSubmit }) {
  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="section-title-wrap">
        <h3>Add Earnings Record</h3>
        <span className="soft-badge">Worker Form</span>
      </div>

      <div className="form-grid">
        <input
          type="text"
          name="platform"
          placeholder="Platform"
          value={form.platform}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="hours"
          placeholder="Hours Worked"
          value={form.hours}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="gross"
          placeholder="Gross Earned"
          value={form.gross}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="deductions"
          placeholder="Platform Deductions"
          value={form.deductions}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="net"
          placeholder="Net Received"
          value={form.net}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="primary-btn">
        Save Record
      </button>
    </form>
  );
}

export default EarningsForm;