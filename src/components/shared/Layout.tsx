import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import "../shared/Layout.css"

export const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink className="href" to="/">
          Home
        </NavLink>
        <NavLink className="href" to="/biography">
          Biography
        </NavLink>
        <NavLink className="href" to="/skills">
          Skills
        </NavLink>
        <a target="_blank" href={"https://github.com/Chaa1982"}>GitHub</a>
      </header>
      <main className="container">
        <Outlet />
      </main>

      
    </>
  );
};
