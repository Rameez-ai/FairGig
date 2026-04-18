import PageHeader from "../components/PageHeader";
import CertificatePreview from "../components/CertificatePreview";

function CertificatePage() {
  function handlePrint() {
    window.print();
  }

  return (
    <div className="page-wrap">
      <PageHeader
        title="Income Certificate"
        subtitle="Printable summary of verified earnings for presentation to banks, landlords, or institutions."
      />

      <div className="print-action-wrap">
        <button className="primary-btn" onClick={handlePrint}>
          Print Certificate
        </button>
      </div>

      <CertificatePreview />
    </div>
  );
}

export default CertificatePage;