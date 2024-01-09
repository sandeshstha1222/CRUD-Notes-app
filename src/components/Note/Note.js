import React from "react";
import { MdDelete } from "react-icons/md";
import "./Note.css";

let timer = 500,
  timeout;

const Note = (props) => {
  const formatDate = (value) => {
    const monthNames = [
      "January",
      "Febrary",
      "March",
      "April",
      "May",
      "Jun",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (!value) return "";
    const date = new Date(value);

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();

    const month = monthNames[date.getMonth()];
    return `${hrs}:${min} ${amPm} ${day}, ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updatedText = (text, id) => {
    debounce(() => props.updatedText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(e) => {
          updatedText(e.target.value, props.note.id);
        }}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <MdDelete
          alt="DELETE"
          className="note_footer_del-button"
          onClick={() => {
            props.deleteNote(props.note.id);
          }}
        />
      </div>
    </div>
  );
};

export default Note;
