import React, { useEffect, useState } from "react";
import "./App.css";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 80),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  const updatedText = (text, id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="App_Contain">
        <Sidebar addNote={addNote} />
        <NoteContainer
          notes={notes}
          deleteNote={deleteNote}
          updatedText={updatedText}
        />
      </div>
    </div>
  );
}

export default App;
