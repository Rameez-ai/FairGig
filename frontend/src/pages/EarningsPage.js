import { useState } from "react";
import PageHeader from "../components/PageHeader";
import EarningsForm from "../components/EarningsForm";
import ScreenshotUpload from "../components/ScreenshotUpload";
import EarningsTable from "../components/EarningsTable";
import { earningsData } from "../utils/mockData";

function EarningsPage() {
  const [records, setRecords] = useState(earningsData);
  const [form, setForm] = useState({
    platform: "",
    date: "",
    hours: "",
    gross: "",
    deductions: "",
    net: ""
  });
  const [fileName, setFileName] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newRecord = {
      id: Date.now(),
      platform: form.platform,
      date: form.date,
      hours: Number(form.hours),
      gross: Number(form.gross),
      deductions: Number(form.deductions),
      net: Number(form.net),
      status: "Pending"
    };

    setRecords([newRecord, ...records]);

    setForm({
      platform: "",
      date: "",
      hours: "",
      gross: "",
      deductions: "",
      net: ""
    });
  }

  function handleFileChange(e) {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  }

  return (
    <div className="page-wrap">
      <PageHeader
        title="Earnings Logger"
        subtitle="Add shift records, track deductions, and prepare screenshot evidence for verification."
      />

      <div className="form-layout">
        <EarningsForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <ScreenshotUpload
          fileName={fileName}
          handleFileChange={handleFileChange}
        />
      </div>

      <EarningsTable records={records} />
    </div>
  );
}

export default EarningsPage;