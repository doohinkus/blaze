require("dotenv").config();

const mongoUri =  `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_DATABASE_HOST}:${process.env.MONGO_DATABASE_PORT}/${process.env.MONGO_INITDB_DATABASE}?authSource=admin`;

module.exports = {mongoUri}