import React from "react";
import { useHistory } from "react-router-dom";
import "../../layout.css";
import "./sidebar.css";

function Sidebar(props) {
  let { tabs, links, onBurgerBar, sideDrawerStatus } = props;
  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
    return onBurgerBar();
  };
  return (
    <div
      className={`flex-column-start-start sidebar-container ${
        sideDrawerStatus && "open-sidebar"
      }`}
    >
      {tabs.map((tab) => (
        <div
          onClick={() => redirectTo(`/${links[tab]}`)}
          className="flex-row-start-center sidebar-items"
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
