import asyncHandler from "../service/asyncHandler.js";
import CustomError from "../service/CustomError.js";
import Notes from "../models/notes.schema.js";

export const createNotes = asyncHandler(async (req, res) => {
    // receiving data
    const { title, description } = req.body;
    // check if data recieved properly
    if(!title || !description){
        throw new CustomError("please fill all fields", 400);
    }
    
    const findNotes = await Notes.findOne({title, description, isDeleted:false});
    
    if(findNotes){
       throw new CustomError("this notes already exists", 400);
    }

    const notes = await Notes.create({title, description});

    if(!notes){
        throw new CustomError("Problem in creating notes", 400);
    }
    res.status(200).json({
        success:true,
        message: "Created successfully",
        notes
    })
})

export const updateNotes = asyncHandler(async (req, res) => {
    const {title, description} = req.body;
    const {id:notesId} = req.params;

    if(!title && !description){
        throw new CustomError("Please give any one field to update", 400)
    }
    // get notes from db
    
    const notes = await Notes.findById(notesId);

    if(!notes){
        throw new CustomError("Notes not found to update", 400)
    }
    // update
    if(title){
        notes.set({title})
    }
    if(description){
        notes.set({description})
    }
    const result = await notes.save()
    if(!result){
        throw new CustomError("Updation not possible", 400);
    }

    res.status(200).json({
        success: true,
        message: "updated successfully",
        result
    });
});

export const deleteNotes = asyncHandler(async (req, res) => {
    const {id:notesId} = req.params;

    const notes = await Notes.findById(notesId);
    
    if(!notes){
        throw new CustomError("Notes not found to delete", 400)
    }

    notes.isDeleted = true;
    notes.deletedAt = new Date();
    
    // notes.set({isDeleted: true, deletedAt: new Date()})
    await notes.save();
    //if(!deleted){
      //  throw new CustomError("Deletion not possible", 400);
    // }
    res.status(200).json({
        success: true,
        message: "Deleted successfully"
    })
})

export const getAllNotes = asyncHandler(async (_req, res) => {
    const notes = await Notes.find({isDeleted:false});
    // console.log(notes)
    // const titles = notes.map((note) => {return ({"_id":note._id,"title":note.title})})
    // console.log(titles)
    if(!notes){
        throw new CustomError("There is no notes", 400);
    }
    res.status(200).json({
        success: true,
        notes
    })
})

export const getANotes = asyncHandler(async (req, res) => {
    const {id:notesId} = req.params;

    const notes = await Notes.findById(notesId);
    if(!notes){
        throw new CustomError("Not found that id", 400);
    }
    res.status(200).json({
        success:true,
        notes
    })
})

