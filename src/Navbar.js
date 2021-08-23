import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import { BoxArrowInRight, List } from "react-bootstrap-icons";
import { Icon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({
  recipes,
  search,
  setSearch,
  theme,
  setTheme,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Nav className="navbar">
      <Nav.Item className="hamburgerMenu">
        <Nav.Link className="nav-link">
          <List className="m-2" size={25} onClick={handleShow} />
          <Offcanvas show={show} onHide={handleClose} bg="dark">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Welcome</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="d-grid gap-2">
                <Button variant="secondary" size="sm">
                  Most Popular
                </Button>
                <Button variant="secondary" size="sm">
                  Holiday Special
                </Button>
                <br />
                <Button variant="secondary" size="sm">
                  <NavLink className="addRecipe" to="/addrecipe">
                    Add Recipe
                  </NavLink>
                </Button>
              </div>
            </Offcanvas.Body>
            <div className="d-grid gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="darkmode"
                onClick={(e) =>
                  setTheme(
                    theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                  )
                }
              >
                {theme.mode === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"}
              </Button>
            </div>
          </Offcanvas>
        </Nav.Link>
      </Nav.Item>
      <div className="title">
        <div style={{ fontWeight: "bold" }}>Healthy Twist</div>
        <p className="quote">
          “A recipe has no soul. You, as the cook, must bring soul to the
          recipe.” – Thomas Keller
        </p>
      </div>

      <Nav.Item>
        <Nav.Link className="nav-link" href="/login">
          Sign In
          <BoxArrowInRight size={20} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="search-link">
        <NavLink classname="homeButton" to="/">
          <Icon
            className="home-icon"
            icon="bi:house-door-fill"
            width="20"
            height="20"
          />
        </NavLink>
        <Nav.Link className="nav-link">
          <SearchBar search={search} setSearch={setSearch} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
