import { Router } from "express";
import { createNotes, deleteNotes, getAllNotes, getANotes, updateNotes } from "../controllers/notes.controller.js";

const route = Router()

route.post("/", createNotes);
route.put("/:id", updateNotes);
route.delete("/:id", deleteNotes);
route.get("/", getAllNotes);
route.get("/:id", getANotes);

export default route;