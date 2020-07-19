const db = require("../db");

/** Related functions for villagers. */

class Villager {
  /** Given a villager name, return data about villager. */

  static async findOne(name) {
    const villagerRes = await db.query(
      `SELECT id, name, image, personality
            FROM villagers
            WHERE UPPER(name) LIKE UPPER($1)
            ORDER BY name`,
      [name + '%']);

    const villager = villagerRes.rows;

    if (!villager) {
      const error = new Error(`There exists no villager '${name}'`);
      error.status = 404;   // 404 NOT FOUND
      throw error;
    }

    return villager;
  }

  /** Filter by personality and/or species */

  static async filter(personalities, species) {
    // need the ' in actual query
  
    // easier to have separate queries then rejoin 
    // ANY requires a subquery 

    let personalitiesQuery;
    let speciesQuery;
    let query; 

    if (personalities) {
      let filteredPersonalities = personalities.map(p => '\'' + p + '\'');
      personalitiesQuery = `personality IN (${filteredPersonalities.join(',')})`;
    }

    if (species) {
      let filteredSpecies = species.map(s => '\'' + s + '\'');
      speciesQuery = `species IN (${filteredSpecies.join(',')})`;
    }

    if (personalities && species) {
      query = `WHERE ${personalitiesQuery} AND ${speciesQuery}`;
    } else if (personalities) {
      query = `WHERE ${personalitiesQuery}`;
    } else {
      query = `WHERE ${speciesQuery}`;
    }

    const filteredRes = await db.query(
      `SELECT id, name, image, personality
      FROM villagers
      ${query}
      ORDER BY name`);

    return filteredRes.rows;
  }
}


module.exports = Villager;
