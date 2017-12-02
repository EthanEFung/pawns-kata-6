const router = require("express").Router();
const controller = require("../controllers/controller");

router
  .get("/", (req, res) => {
    res.sendStatus(200);
  })
  .get("/start", controller.startGame)
  .post("/move", controller.postMove);

module.exports = router;
