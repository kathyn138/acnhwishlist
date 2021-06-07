/** Database connection for Villager Wishlist. */

const { Client } = require("pg");

// const client = new Client(process.env.DATABASE_URL || "postgresql:///villagerwishlist");

let config;

if (process.env.DATABASE_URL) {
    config = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
} else {
    config = {
        connectionString: "postgresql:///villagerwishlist"
    }
}

const client = new Client(config);

client.connect();


module.exports = client;
