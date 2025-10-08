import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// implementing cors
const allowedOrigin = "https://mern-notes-app-eta.vercel.app/";

app.use(cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
// if downloaded remove lines from implementing cors and make app.use(cors())

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