import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import { BoxArrowInRight, List } from "react-bootstrap-icons";
import { Icon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
          <List className="m-2" size={30} onClick={handleShow} />
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
                <Button variant="secondary" size="sm">
                  <Link to="/whattocook">What do I cook?</Link>
                </Button>
                <br />
                <Button variant="secondary" size="sm">
                  <Link to="/addrecipe">Add Recipe</Link>
                </Button>
                <br />
              </div>
            </Offcanvas.Body>
            {/* <BootstrapSwitchButton checked={false} onstyle="dark" offstyle="light" style="border"/> */}
            <button
              onClick={(e) =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
            >
              {theme.mode === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"}
            </button>
          </Offcanvas>
        </Nav.Link>
      </Nav.Item>
      <div className="title">
        <div style={{ fontWeight: "bold" }}>Healthy Twist</div>
        <p>your favourite food blog</p>
      </div>

      <Nav.Item>
        <Nav.Link href="/">
          {/* <i class="bi bi-house-door"></i> */}
          <Icon
            className="home-icon"
            icon="bi:house-door-fill"
            width="25"
            height="25"
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link" href="/login">
          Sign In
          <BoxArrowInRight size={25} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="search-link">
        <Nav.Link className="nav-link">
          <SearchBar search={search} setSearch={setSearch} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
