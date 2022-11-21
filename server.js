const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;

const routes = require("./routes/index");
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

module.exports = app;
