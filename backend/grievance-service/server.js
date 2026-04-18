const express = require("express");
const cors = require("cors");
const grievanceRoutes = require("./routes/grievanceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Grievance Service Running" });
});

app.use("/grievances", grievanceRoutes);

app.listen(5000, () => {
  console.log("Grievance service running on port 5000");
});