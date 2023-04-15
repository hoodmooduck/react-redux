import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss"



function Sidebar(props) {
  
  return (
    <div className="sideBar">
        <div className="sideBarColumn">
          {props.nameLinks.map((el,idx) => (
            <NavLink to={el.link} className="sideBarLink" key={idx}>{el.name}</NavLink>
          ))}
        </div>
    </div>
  );
}

export default Sidebar;