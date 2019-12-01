import React, { Component } from "react";

//We can use instead of a class a function "Stateless Function Components"
//Insted of having a class extends component with a render method, we define a function
//that returns a React element
//*we use sfc - tab - to create a stateless functional component.

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
