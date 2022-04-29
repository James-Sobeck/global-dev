// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 require('dotenv').config();
 const path = require("path");
 
const DATABASE_URL = "postgresql://postgres@localhost/postgres";

module.exports = {

  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    }
  },

};
