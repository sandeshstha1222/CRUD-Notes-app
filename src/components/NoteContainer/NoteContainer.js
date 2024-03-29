import React from "react";
import "./NoteContainer.css";
import Note from "../Note/Note";

const NoteContainer = (props) => {
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };
  const notes = reverseArray(props.notes);
  return (
    <div className="note-container">
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item, index) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updatedText={props.updatedText}
            />
          ))
        ) : (
          <p>Empty </p>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
