import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { advocateStats, earningsData, weeklyTrend } from "../utils/mockData";

function Dashboard() {
  const totalNet = earningsData.reduce((sum, item) => sum + Number(item.net), 0);
  const totalHours = earningsData.reduce((sum, item) => sum + Number(item.hours), 0);
  const hourlyRate = totalHours ? Math.round(totalNet / totalHours) : 0;
  const verifiedCount = earningsData.filter(
    (item) => item.status === "Verified"
  ).length;

  const maxTrend = Math.max(...weeklyTrend.map((item) => item.value));

  return (
    <div className="page-wrap">
      <PageHeader
        title="Worker Dashboard"
        subtitle="Track verified income, monitor trends, and compare performance with anonymised city-level insights."
      />

      <div className="stats-grid">
        <StatCard
          label="Net Earnings"
          value={`PKR ${totalNet}`}
          description="Across all recorded shifts"
        />
        <StatCard
          label="Hourly Rate"
          value={`PKR ${hourlyRate}`}
          description="Effective earning per hour"
        />
        <StatCard
          label="Verified Records"
          value={verifiedCount}
          description="Approved earning entries"
        />
        <StatCard
          label="City Median"
          value={advocateStats.cityMedian}
          description="Based on aggregated worker data"
        />
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="section-title-wrap">
            <h3>Weekly Earnings Trend</h3>
            <span className="soft-badge">Monthly Overview</span>
          </div>

          <div className="bar-chart">
            {weeklyTrend.map((item) => (
              <div className="bar-item" key={item.week}>
                <div
                  className="bar-fill"
                  style={{ height: `${(item.value / maxTrend) * 220}px` }}
                ></div>
                <span className="bar-value">PKR {item.value}</span>
                <span className="bar-label">{item.week}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="section-title-wrap">
            <h3>Insights</h3>
            <span className="soft-badge">Smart Summary</span>
          </div>

          <div className="insight-list">
            <div className="insight-item">
              <strong>{advocateStats.avgCommission}</strong>
              <p>Average reported platform commission</p>
            </div>

            <div className="insight-item">
              <strong>{advocateStats.volatility}</strong>
              <p>Income volatility across recent weeks</p>
            </div>

            <div className="insight-item">
              <strong>{advocateStats.vulnerableWorkers}</strong>
              <p>Workers flagged for major month-on-month income drop</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card hero-card">
        <div>
          <h3>FairGig helps workers prove income clearly</h3>
          <p>
            Log shifts, upload screenshots, view verification results, and
            generate a professional income summary for landlords or banks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;