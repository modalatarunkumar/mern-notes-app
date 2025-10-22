import mongoose from "mongoose";
import config from "./src/config/index.js";
import app from "./src/app.js";

(async () => {
    try {
        const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
        await mongoose.connect(config.MONGODB_URI, clientOptions);
        console.log("DB connected successfully")
        mongoose.connection.on("disconnected", () => console.log("MongoDB disconnected"));
        mongoose.connection.on("error", (err) => console.error("MongoDB error:", err));

        
        app.on("error", (error) => {
            console.error("Error on app connecting db: ", error)
        })

        app.listen(config.PORT, () => {
            console.log(`Listening on port ${config.PORT}`);
        })
    } catch (error) {
        console.error("Error: ", error)
    }
    finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
})()