/** Database connection for Villager Wishlist. */

const { Client } = require("pg");

const client = new Client({
    // "postgresql:///villagerwishlist"
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();


module.exports = client;
