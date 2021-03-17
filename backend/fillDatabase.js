const db = require("./db");
const express = require("express");
const router = new express.Router();

const { crankyVillagers, jockVillagers, lazyVillagers,
  normalVillagers, peppyVillagers, smugVillagers,
  snootyVillagers, uchiVillagers } = require('../scripts/villagers');


let personalityTypes = [crankyVillagers, jockVillagers, lazyVillagers,
  normalVillagers, peppyVillagers, smugVillagers,
  snootyVillagers, uchiVillagers];

let folderNames = ['Cranky', 'Jock', 'Lazy', 'Normal', 'Peppy', 'Smug',
  'Snooty', 'Uchi'];

// route for populating the database
// does not include species data
router.post("/db/fill", async function () {
  for (let i = 0; i < personalityTypes.length; i++) {
    for (let j = 0; j < personalityTypes[i].length; j++) {
      let name = personalityTypes[i][j];
      let image = `/villagers/${folderNames[i]}/${name}.png`;
      let personality = folderNames[i];

      try {
        await db.query(`
          INSERT INTO villagers (name, image, personality)
          VALUES ($1, $2, $3)`,
          [name, image, personality])
      } catch (err) {
        return next(err);
      }
    }
  }
}
)


module.exports = router;