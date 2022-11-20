const express = require("express");
const controllers = require("../controllers");
const router = express.Router();
const mysqlConntection = require("../services/db");

router.get("/", (req, res) => {
  mysqlConntection.query("select * from Data;", (err, rows, fields) => {
    if(!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  })
});

router.route("/getData").get(controllers.getAllData);
router.route("/:column/values").get(controllers.getColumnValues);
router.route("/info/:client/:date").get(controllers.getInformationRepresentation1);
router.route("/info/:client/:date/:host").get(controllers.getInformationRepresentation2);

// router.route("/devices").get(controllers.getUniqueDevices);
// router.route("/clients").get(controllers.getUniqueClients);
// router.route("/hosts").get(controllers.getUniquehosts);
// router.route("/dates").get(controllers.getUniqueDates);

module.exports = router;
