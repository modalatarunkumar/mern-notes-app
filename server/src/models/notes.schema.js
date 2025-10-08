import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        maxLength: [50, "Title should not exceed fifty characters"]
    },
    description : {
        type: String,
        required: [true, "description is needed"],
        maxLength: [240, "description should not exceed 240 characters"]
    },
    isDeleted :{
        type: Boolean,
        default: false,
    },
    deletedAt: Date
    
}, {timestamps:true})

export default mongoose.model("Notes", notesSchema)