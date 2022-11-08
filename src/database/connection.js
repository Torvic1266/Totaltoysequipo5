/**
 * Import Sequelize.
 */
const Sequelize = require("sequelize");

/**
 * Create a Sequelize instance. This can be done by passing
 * the connection parameters separately to the Sequelize constructor.
 */
 const sequelize = new Sequelize("sql9552987", "sql9552987", "jNwkJLz7LL", {
    host: "sql9.freemysqlhosting.net",
    dialect: "mysql"
});
/**
 * Export the Sequelize instance. This instance can now be 
 * used in the app.js file to authenticate and establish a database connection.
 */
module.exports = sequelize;