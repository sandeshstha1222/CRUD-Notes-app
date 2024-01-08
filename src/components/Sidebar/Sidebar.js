import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import "./Sidebar.css";

const Sidebar = () => {
  const color = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
  return (
    <div className="sidebar">
      <FaCirclePlus size={50} alt="Add" className="sidebar_add-icon" />
      <ul className="sidebar_color-list">
        {color.map((item, index) => (
          <li
            key={index}
            className="sidebar_list-item"
            style={{ backgroundColor: item }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
