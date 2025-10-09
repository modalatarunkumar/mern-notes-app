import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import config from "./config/index.js";

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// implementing cors
const allowedOrigins = [config.FRONT_END_URL, "http://localhost:3000"];
app.use(cors({
    origin: function(origin, callback) {
        if(!origin || allowedOrigins.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error("Not allowed by CORS"))
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"]
}))


app.use("/api/v1", routes);


app.use((_req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

app.use("/", (_req, res) => {
    res.send("Hello there tarun kumar - api");
})

export default app;