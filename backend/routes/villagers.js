/** Routes for villagers. */

const express = require("express");
const router = new express.Router();
const Villager = require("../models/villager");

/** GET /  =>  {crankyVillagers: [villager, villager]}  */

router.get("/cranky", async function (req, res, next) {
  try {
    const crankyVillagers = await Villager.findAllCranky(req.query);
    return res.json({ crankyVillagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /  =>  {jockVillagers: [villager, villager]}  */

router.get("/jock", async function (req, res, next) {
  try {
    const jockVillagers = await Villager.findAllJock(req.query);
    return res.json({ jockVillagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /  =>  {lazyVillagers: [villager, villager]}  */

router.get("/lazy", async function (req, res, next) {
  try {
    const lazyVillagers = await Villager.findAllLazy(req.query);
    return res.json({ lazyVillagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /  =>  {normalVillagers: [villager, villager]}  */

router.get("/normal", async function (req, res, next) {
  try {
    const normalVillagers = await Villager.findAllNormal(req.query);
    return res.json({ normalVillagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /  =>  {peppyVillagers: [villager, villager]}  */

router.get("/peppy", async function (req, res, next) {
  try {
    const peppyVillagers = await Villager.findAllPeppy(req.query);
    return res.json({ peppyVillagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /  =>  {smugVillagers: [villager, villager]}  */

router.get("/smug", async function (req, res, next) {
  try {
    const smugVillagers = await Villager.findAllSmug(req.query);
    return res.json({ smugVillagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /  =>  {snootyVillagers: [villager, villager]}  */

router.get("/snooty", async function (req, res, next) {
  try {
    const snootyVillagers = await Villager.findAllSnooty(req.query);
    return res.json({ snootyVillagers });
  } catch (err) {
    return next(err);
  }
});

/** GET /  =>  {uchiVillagers: [villager, villager]}  */

router.get("/uchi", async function (req, res, next) {
  try {
    const uchiVillagers = await Villager.findAllUchi(req.query);
    return res.json({ uchiVillagers });
  } catch (err) {
    return next(err);
  }
});

/** 
 * route for searching by villager name
 * GET /[name]  =>  {villager: villager} */

router.get("/:name", async function (req, res, next) {
  try {
    const villager = await Villager.findOne(req.params.name);
    return res.json({ villager });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
