/** Route to wake up the Heroku backend. */

const express = require("express");
const router = new express.Router();

/** GET /cranky  =>  {villagers: [villager, villager]}  */

router.get("/", async function (req, res, next) {
  try {
    return res.json("hi i'm awake :3");
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
