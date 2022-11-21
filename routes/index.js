const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Connection Established!");
});

router.route("/all").get(controllers.getAllData);
router.route("/:column/values").get(controllers.getColumnValues);
router
  .route("/info/:client/:date")
  .get(controllers.getInformationRepresentation1);
router
  .route("/info/:client/:date/:host")
  .get(controllers.getInformationRepresentation2);

module.exports = router;
