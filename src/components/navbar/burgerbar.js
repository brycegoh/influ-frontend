import React from "react";

function Burgerbar(props) {
  return (
    <button
      onClick={props.onBurgerBar}
      className="flex-column-space-around-center navbar-burgerbar-button "
    >
      <div className="navbar-burgerbar-line" />
      <div className="navbar-burgerbar-line" />
      <div className="navbar-burgerbar-line" />
    </button>
  );
}

export default Burgerbar;
