/** Routes for villagers. */

const express = require("express");
const router = new express.Router();
const Villager = require("../models/villager");

/** GET /cranky  =>  {villagers: [villager, villager]}  */

router.get("/cranky", async function (req, res, next) {
  try {
    const villagers = await Villager.findAllCranky();
    return res.json({ villagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /jock  =>  {villagers: [villager, villager]}  */

router.get("/jock", async function (req, res, next) {
  try {
    const villagers = await Villager.findAllJock();
    return res.json({ villagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /lazy  =>  {villagers: [villager, villager]}  */

router.get("/lazy", async function (req, res, next) {
  try {
    const villagers = await Villager.findAllLazy();
    return res.json({ villagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /normal  =>  {villagers: [villager, villager]}  */

router.get("/normal", async function (req, res, next) {
  try {
    const villagers = await Villager.findAllNormal();
    return res.json({ villagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /peppy  =>  {villagers: [villager, villager]}  */

router.get("/peppy", async function (req, res, next) {
  try {
    const villagers = await Villager.findAllPeppy();
    return res.json({ villagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /smug  =>  {villagers: [villager, villager]}  */

router.get("/smug", async function (req, res, next) {
  try {
    const villagers = await Villager.findAllSmug();
    return res.json({ villagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /snooty  =>  {villagers: [villager, villager]}  */

router.get("/snooty", async function (req, res, next) {
  try {
    const villagers = await Villager.findAllSnooty();
    return res.json({ villagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /uchi  =>  {villagers: [villager, villager]}  */

router.get("/uchi", async function (req, res, next) {
  try {
    const villagers = await Villager.findAllUchi();
    return res.json({ villagers });
  } catch (err) {
    return next(err);
  }
});

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
