const express = require("express");
const router = express.Router();
const chairs = require("./chair.query");

/* GET programming languages. */
router.post("/create", async function (req, res, next) {
  try {
    console.log("req chair,", req.body);
    return await chairs.createChair();
  } catch (error) {
    console.log("Error while creating chair", error);
    next(error);
  }
});
router.get("/", async function (req, res, next) {
  try {
    console.log("getting data", req.query);
    res.json(await chairs.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;
