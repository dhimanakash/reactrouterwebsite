import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>Oopsss, Sorry Page not Found 😭</h1>
      <NavLink
        to="/"
        activeStyle={{
          fontSize: 30,
          // border: "1px solid red",
          paddingTop: 10,
        }}
      >
        Go Back
      </NavLink>
    </div>
  );
}

export default Error;
