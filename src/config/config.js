import dotenv from 'dotenv'
dotenv.config()

export default {
    port: process.env.PORT,
    mongoURL: process.env.MONGO_URL,
    db_name: process.env.DB_NAME,
    db_password: process.env.DB_PASSWORD,

};