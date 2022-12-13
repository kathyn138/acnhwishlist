/** Database connection for Villager Wishlist. */

require('dotenv').config();
const { Client } = require("pg");

let config;

if (process.env.DATABASE_URL) {
    config = {
        connectionString: process.env.DATABASE_URL
    }
    console.log('uhh', process.env.DATABASE_URL)
} else {
    config = {
        connectionString: "postgresql:///villagerwishlist"
    }
    console.log('as')
}

const client = new Client(config);

client.connect();


module.exports = client;