let uchiVillagers = [
  'Agnes', 'Canberra', 'Charlise', 'Cherry', 'Deirdre', 'Diva', 'Flo',
  'Frita', 'Fuchsia', 'Hazel', 'Katt', 'Mira', 'Muffy', 'Pashmina',
  'Paula', 'Phoebe', 'Plucky', 'Renee', 'Rocket', 'Reneigh', 'Shari',
  'Sylvia', 'Tammy', 'Ursala',
];

const db = require("./db");
const express = require("express");
const router = new express.Router();



router.post("/wtf", async function (name, image, personality) {

  for (let i = 0; i < uchiVillagers.length; i++) {
    let name1 = uchiVillagers[i];
    let image1 = `/villagers/uchi/${name1}.png`;
    let personality1 = 'Uchi';
    try {
      await db.query(`
        INSERT INTO villagers (name, image, personality)
        VALUES ($1, $2, $3)`, 
        [name1, image1, personality1])
    } catch (err) {
      return next(err);
    }
  }
}
)


module.exports = router;