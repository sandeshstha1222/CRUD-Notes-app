import React from "react";
import "./App.css";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const notes = [
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
  ];
  return (
    <div className="App">
      <Sidebar />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;
