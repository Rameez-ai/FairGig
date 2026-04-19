function StatCard({ label, value, description }) {
  return (
    <div className="card stat-card">
      <span className="card-label">{label}</span>
      <h2>{value}</h2>
      <p>{description}</p>
    </div>
  );
}

export default StatCard;