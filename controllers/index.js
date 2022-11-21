const AppError = require("../utils/appError");
const mysqlConntection = require("../services/db");

exports.getAllData = (req, res, next) => {
  mysqlConntection.query("SELECT * FROM Data", function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.getColumnValues = (req, res, next) => {
  mysqlConntection.query(
    `SELECT DISTINCT(newData.${req.params.column}) FROM (SELECT *, substring_index(createdAt, ' ', 1) creation_date, substring_index(createdAt, ' ', -1) creation_time FROM Data) AS newData;`,
    function (err, data, fields) {
      if (err) return next(new AppError(err));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};

exports.getInformationRepresentation1 = (req, res, next) => {
  mysqlConntection.query(
    `SELECT hostName, SUM(download) AS download, SUM(upload) AS upload, SUM(usageSeconds) AS usageSeconds from Data WHERE (createdAt LIKE '%${req.params.date}%' AND clientIp = '${req.params.client}') GROUP BY hostName;`,
    function (err, data, fields) {
      if (err) return next(new AppError(err));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};

exports.getInformationRepresentation2 = (req, res, next) => {
  mysqlConntection.query(
    `SELECT substr(newData.creation_time, 1, 2) AS time, SUM(download) AS download, SUM(upload) AS upload, SUM(usageSeconds) AS usageSeconds FROM (SELECT *, substring_index(createdAt, ' ', 1) creation_date, substring_index(createdAt, ' ', -1) creation_time FROM Data WHERE (createdAt LIKE '%${req.params.date}%' AND clientIp = '${req.params.client}') AND hostName = '${req.params.host}') AS newData GROUP BY substr(newData.creation_time, 1, 2);`,
    function (err, data, fields) {
      if (err) return next(new AppError(err));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};
