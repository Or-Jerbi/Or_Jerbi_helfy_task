const express = require('express');
const cors = require('cors');
const taskRoutes = require("./routes/taskRoutes");

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({ msg: "route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});