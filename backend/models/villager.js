const db = require("../db");

/** Related functions for villagers. */

class Villager {

  /** Find all Cranky villagers. */

  static async findAllCranky() {
    const crankyRes = await db.query(
      `SELECT id, name, image, personality
          FROM villagers
          WHERE personality = 'Cranky'
          ORDER BY name`);

    return crankyRes.rows;
  }

  /** Find all Jock villagers. */

  static async findAllJock() {
    const jockRes = await db.query(
      `SELECT id, name, image, personality
          FROM villagers
          WHERE personality = 'Jock'
          ORDER BY name`);

    return jockRes.rows;
  }

  /** Find all Lazy villagers. */

  static async findAllLazy() {
    const lazyRes = await db.query(
      `SELECT id, name, image, personality
          FROM villagers
          WHERE personality = 'Lazy'
          ORDER BY name`);

    return lazyRes.rows;
  }

  /** Find all Normal villagers. */

  static async findAllNormal() {
    const normalRes = await db.query(
      `SELECT id, name, image, personality
          FROM villagers
          WHERE personality = 'Normal'
          ORDER BY name`);

    return normalRes.rows;
  }

  /** Find all Peppy villagers. */

  static async findAllPeppy() {
    const peppyRes = await db.query(
      `SELECT id, name, image, personality
          FROM villagers
          WHERE personality = 'Peppy'
          ORDER BY name`);

    return peppyRes.rows;
  }

  /** Find all Smug villagers. */

  static async findAllSmug() {
    const smugRes = await db.query(
      `SELECT id, name, image, personality
          FROM villagers
          WHERE personality = 'Smug'
          ORDER BY name`);

    return smugRes.rows;
  }

  /** Find all Snooty villagers. */

  static async findAllSnooty() {
    const snootyRes = await db.query(
      `SELECT id, name, image, personality
          FROM villagers
          WHERE personality = 'Snooty'
          ORDER BY name`);

    return snootyRes.rows;
  }

  /** Find all Uchi villagers. */

  static async findAllUchi() {
    const uchiRes = await db.query(
      `SELECT id, name, image, personality
          FROM villagers
          WHERE personality = 'Uchi'
          ORDER BY name`);

    return uchiRes.rows;
  }

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
}


module.exports = Villager;
