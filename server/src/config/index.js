import dotenv from "dotenv";

dotenv.config()

const config = {
    PORT : process.env.PORT || 5000,
    MONGODB_URI : process.env.MONGODB_URI,
    FRONTEND_URL: process.env.FRONTEND_URL
}

export default config;