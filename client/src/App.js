import axios from "axios";
import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

// const API_BASE_URL = "http://localhost:5000/api/v1/notes"; 

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null); // Track which note is being edited
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [loadingAction, setLoadingAction] = useState(false);


  const fetchNotes = async () => {
    setLoadingFetch(true)
    const res = await axios.get(API_BASE_URL);
    
    setNotes(res.data.notes);
    setLoadingFetch(false)
  };

  const createNote = async () => {
    if (!form.title || !form.description) return toast.error("Please fill all fields");
    try{
      setLoadingAction(true);
      toast.loading("Creating note... ")
      await axios.post(API_BASE_URL, form);
      toast.dismiss()
      toast.success("Note added!");
      setForm({ title: "", description: "" });
      await fetchNotes();
      
    }
    catch(error){
      toast.dismiss()
      toast.error(error?.response?.data?.message || "failed to add note")
    }
    finally{
      setLoadingAction(false);
    }
  };
  // Prepare form for editing
  const editNote = (note) => {
    setForm({ title: note.title, description: note.description });
    setEditingId(note._id);
  };
  const cancelEdit = () =>{
    setForm({title:"", description:""});
    setEditingId(null)
  }

  // Update an existing note
  const updateNote = async () => {
    if (!editingId) return;
    try{
      setLoadingAction(true);
      toast.loading("updating note...");
      await axios.put(`${API_BASE_URL}/${editingId}`, form);
      toast.dismiss()
      toast.success("Updated successfully");
      setForm({ title: "", description: "" });
      setEditingId(null);
      await fetchNotes();
    }
    catch(error){
      toast.dismiss();
      toast.error(error?.response?.data?.message || "failed to update note");
    } finally{
      setLoadingAction(false);
    }
  };
  
  const deleteNote = async (id) => {
    try {
      setLoadingAction(true);
      toast.loading("Deleting")
      await axios.delete(`${API_BASE_URL}/${id}`);
      toast.dismiss()
      toast.success("Note deleted!")
      await fetchNotes();
      if(id === editingId){
        setEditingId(null)
        setForm({title: "", description: ""})
      }
    } catch (error) {
      toast.dismiss()
      toast.error("Failed to delete note")
    }
    finally{
      setLoadingAction(false);
    }
  };

  useEffect(() => { fetchNotes(); }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Notes App</h1>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Content"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        style={{ width: "100%", height: "80px", padding: "8px" }}
      />
    {editingId ? (<>
        <button onClick={updateNote} style={{ marginTop: "10px" }} disabled={loadingAction}>
          {loadingAction? "updating..." : "Update Note"}
        </button>
        <button onClick={cancelEdit} disabled={loadingAction} >Cancel</button>
        </>
      ) : (
        <button onClick={createNote} style={{ marginTop: "10px" }} disabled={loadingAction}>
          {loadingAction? "saving..." : "Add Note" }
        </button>
      )}
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {loadingFetch? <p>Loading... </p>: <>{notes && notes.length > 0 ? (notes.map((n) => (
          <li 
          key={n._id}
          style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}>
            <h3>{n.title}</h3>
            <p>{n.description}</p>
            <button onClick={() => editNote(n)}>Edit</button>
            <button onClick={() => deleteNote(n._id)}>Delete</button>
          </li>
        ))): <p>no notes</p>}</>}
      </ul>
      <Toaster />
    </div>
  );
}

export default App;
