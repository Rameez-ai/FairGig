import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { advocateStats, grievances } from "../utils/mockData";

function AdvocatePanel() {
  return (
    <div className="page-wrap">
      <PageHeader
        title="Advocate Analytics Panel"
        subtitle="Monitor aggregate trends, complaint categories, and vulnerable worker flags from reported data."
      />

      <div className="stats-grid">
        <StatCard
          label="Avg Commission"
          value={advocateStats.avgCommission}
          description="Across reported platforms"
        />
        <StatCard
          label="Median Income"
          value={advocateStats.cityMedian}
          description="Zone-level aggregate comparison"
        />
        <StatCard
          label="Volatility"
          value={advocateStats.volatility}
          description="Month-on-month instability"
        />
        <StatCard
          label="Vulnerability Flags"
          value={advocateStats.vulnerableWorkers}
          description="Income drop above 20%"
        />
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="section-title-wrap">
            <h3>Top Complaint Categories</h3>
            <span className="soft-badge">This Week</span>
          </div>

          <div className="category-list">
            {grievances.map((item) => (
              <div className="mini-row" key={item.id}>
                <span>{item.category}</span>
                <span>{item.platform}</span>
                <span>{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="section-title-wrap">
            <h3>Advocate Note</h3>
            <span className="soft-badge">Systemic Fairness</span>
          </div>

          <div className="advocate-note">
            <p>
              This panel helps advocates identify platform commission shifts,
              income instability, and repeated complaints that individual workers
              might not see alone.
            </p>

            <ul>
              <li>Track platform commission changes over time</li>
              <li>Spot clustered complaints by type and platform</li>
              <li>Review vulnerable workers with sudden income drops</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvocatePanel;