const grievances = require("../models/Grievance");

exports.getAllGrievances = (req, res) => {
  res.json(grievances);
};

exports.createGrievance = (req, res) => {
  const newGrievance = {
    id: Date.now(),
    ...req.body,
    tags: req.body.tags || [],
    cluster: req.body.cluster || "General",
    status: req.body.status || "Open"
  };

  grievances.push(newGrievance);
  res.status(201).json(newGrievance);
};

exports.updateGrievance = (req, res) => {
  const id = parseInt(req.params.id);
  const grievance = grievances.find((g) => g.id === id);

  if (!grievance) {
    return res.status(404).json({ message: "Grievance not found" });
  }

  Object.assign(grievance, req.body);
  res.json(grievance);
};

exports.deleteGrievance = (req, res) => {
  const id = parseInt(req.params.id);
  const index = grievances.findIndex((g) => g.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Grievance not found" });
  }

  grievances.splice(index, 1);
  res.json({ message: "Grievance deleted" });
};