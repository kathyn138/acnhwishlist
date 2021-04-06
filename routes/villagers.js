/** Routes for villagers. */

const express = require("express");
const router = new express.Router();
const Villager = require("../models/villager");

/** 
 * route for searching by villager name
 * GET ?name=villager  =>  {villager: villager} */

router.get("/", async function (req, res, next) {
  try {
    const villager = await Villager.findOne(req.query.name);
    return res.json({ villager });
  } catch (err) {
    return next(err);
  }
});

router.get("/filter", async function (req, res, next) {
  try {
    const villagers = await Villager.filter(req.query.personalities, 
      req.query.species);
    return res.json({ villagers });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
