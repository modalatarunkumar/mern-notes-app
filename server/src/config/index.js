import dotenv from "dotenv";

dotenv.config()

const config = {
    PORT : process.env.PORT || 5000,
    MONGODB_URI : process.env.MONGODB_URI,
    FRONT_END_URL: process.env.FRONT_END_URL
}

export default config;