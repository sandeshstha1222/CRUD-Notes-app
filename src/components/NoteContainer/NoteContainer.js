import React from "react";
import "./NoteContainer.css";
import Note from "../Note/Note";

const NoteContainer = (props) => {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        {props.notes.map((item, index) => (
          <Note key={index} note={item} />
        ))}
      </div>
    </div>
  );
};

export default NoteContainer;
