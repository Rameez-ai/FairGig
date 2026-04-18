function ComplaintForm({ form, handleChange, handleSubmit }) {
  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="section-title-wrap">
        <h3>Post Complaint</h3>
        <span className="soft-badge">Worker Community</span>
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
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        name="description"
        placeholder="Describe your issue clearly"
        rows="6"
        value={form.description}
        onChange={handleChange}
        required
      />

      <button type="submit" className="primary-btn">
        Submit Complaint
      </button>
    </form>
  );
}

export default ComplaintForm;