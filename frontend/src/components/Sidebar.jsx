function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div>
        <div className="brand-wrap">
          <div className="brand-icon">FG</div>
          <div>
            <h1 className="brand">FairGig</h1>
            <p className="brand-subtitle">Income & Rights Platform</p>
          </div>
        </div>

        <nav className="nav-menu">
          <button
            className={`nav-btn ${activePage === "dashboard" ? "active" : ""}`}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={`nav-btn ${activePage === "earnings" ? "active" : ""}`}
            onClick={() => setActivePage("earnings")}
          >
            Earnings Logger
          </button>

          <button
            className={`nav-btn ${
              activePage === "verification" ? "active" : ""
            }`}
            onClick={() => setActivePage("verification")}
          >
            Verification
          </button>

          <button
            className={`nav-btn ${activePage === "grievances" ? "active" : ""}`}
            onClick={() => setActivePage("grievances")}
          >
            Grievance Board
          </button>

          <button
            className={`nav-btn ${activePage === "advocate" ? "active" : ""}`}
            onClick={() => setActivePage("advocate")}
          >
            Advocate Panel
          </button>

          <button
            className={`nav-btn ${
              activePage === "certificate" ? "active" : ""
            }`}
            onClick={() => setActivePage("certificate")}
          >
            Income Certificate
          </button>
        </nav>
      </div>

      <div className="sidebar-footer">
        <span className="role-pill">Worker</span>
        <span className="status-dot"></span>
        <span>Live Demo UI</span>
      </div>
    </aside>
  );
}

export default Sidebar;