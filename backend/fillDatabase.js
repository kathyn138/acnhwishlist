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

router.post("/", async function (req, res, next) {
  for (let i = 0; i < personalityTypes.length; i++) {
    for (let j = 0; j < personalityTypes[i].length; j++) {
      console.log('name:', personalityTypes[i][j])
      let name = personalityTypes[i][j];
      let personality = folderNames[i];
      let image = `https://github.com/kathyn138/acnhwishlist/blob/master/frontend/src/Assets/Villagers/${folderNames[i]}/${name}.png?raw=true`;

      try {
        await db.query(`
          INSERT INTO villagers (name, image, personality)
          VALUES ($1, $2, $3)`,
          [name, image, personality]);
        return 'added to database!';
      } catch (err) {
        return next(err);
      }
    }
  }
}
)


module.exports = router;