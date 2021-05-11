import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", marginTop: "2rem" }}
      >
        © 2021 Copyright:
        <NavLink class="text-reset fw-bold" to="#">
          GeeksCode.com
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
