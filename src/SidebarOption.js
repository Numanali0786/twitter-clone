import React from "react";
import "./sidebarOption.css";

const SidebarOption = ({ active, text, Icon }) => {
  console.log(active);
  return (
    <div>
      <div className={`sidebarOption ${active && "SidebarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default SidebarOption;
