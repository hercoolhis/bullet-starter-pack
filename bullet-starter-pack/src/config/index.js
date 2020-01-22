require('dotenv').config();

module.exports = {
    port : process.env.PORT,
    databaseUrl : process.env.dbUrl
}

