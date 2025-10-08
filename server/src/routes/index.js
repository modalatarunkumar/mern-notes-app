import { Router } from "express";
import notesRoutes from "./notes.route.js";

const route = Router()

route.use("/notes", notesRoutes);


export default route;