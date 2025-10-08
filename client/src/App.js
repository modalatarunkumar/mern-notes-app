import axios from "axios";
import { useState, useEffect } from "react";

// const API_BASE_URL = "http://localhost:5000/api/v1/notes"; 

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null); // Track which note is being edited


  const fetchNotes = async () => {
    const res = await axios.get(API_BASE_URL);
    console.log(res.data.notes)
    setNotes(res.data.notes);
  };

  const createNote = async () => {
    if (!form.title || !form.description) return alert("Fill all fields");
    await axios.post(API_BASE_URL, form);
    setForm({ title: "", description: "" });
    fetchNotes();
  };
  // Prepare form for editing
  const editNote = (note) => {
    setForm({ title: note.title, description: note.description });
    setEditingId(note._id);
  };

  // Update an existing note
  const updateNote = async () => {
    if (!editingId) return;
    await axios.put(`${API_BASE_URL}/${editingId}`, form);
    setForm({ title: "", description: "" });
    setEditingId(null);
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);
    fetchNotes();
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
    {editingId ? (
        <button onClick={updateNote} style={{ marginTop: "10px" }}>
          Update Note
        </button>
      ) : (
        <button onClick={createNote} style={{ marginTop: "10px" }}>
          Add Note
        </button>
      )}
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {notes && notes.map((n) => (
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
        ))}
      </ul>
    </div>
  );
}

export default App;
