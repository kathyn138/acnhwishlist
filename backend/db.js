/** Database connection for Villager Wishlist. */

const { Client } = require("pg");

const client = new Client({
    connectionString: process.env.DATABASE_URL || "postgresql:///villagerwishlist",
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();


module.exports = client;
