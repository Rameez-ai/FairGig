import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import EarningsPage from "./pages/EarningsPage";
import VerificationPage from "./pages/VerificationPage";
import GrievancePage from "./pages/GrievancePage";
import AdvocatePanel from "./pages/AdvocatePanel";
import CertificatePage from "./pages/CertificatePage";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  function renderPage() {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "earnings":
        return <EarningsPage />;
      case "verification":
        return <VerificationPage />;
      case "grievances":
        return <GrievancePage />;
      case "advocate":
        return <AdvocatePanel />;
      case "certificate":
        return <CertificatePage />;
      default:
        return <Dashboard />;
    }
  }

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="main-area">
        <Navbar />
        <section className="content-area">{renderPage()}</section>
      </main>
    </div>
  );
}

export default App;