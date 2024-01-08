import React, { useState } from "react";
import "./App.css";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState([
    {
      text: "sad",
      time: "1:50pm",
      color: "orange",
    },
    {
      text: "sad",
      time: "1:50pm",
      color: "orange",
    },
    {
      text: "sad",
      time: "1:50pm",
      color: "orange",
    },
    {
      text: "sad",
      time: "1:50pm",
      color: "orange",
    },
    {
      text: "sad",
      time: "1:50pm",
      color: "orange",
    },
    {
      text: "sad",
      time: "1:50pm",
      color: "orange",
    },
  ]);
  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({ text: "", time: Date.now(), color });
    setNotes(tempNotes);
  };
  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;
