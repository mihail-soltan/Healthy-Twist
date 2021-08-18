import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import { BoxArrowInRight, List } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Navbar({ recipes, search, setSearch }) {
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
                <br />
                <Link to="/addrecipe">
                  <Button variant="secondary" size="sm">
                    Share a Recipe
                  </Button>
                </Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link className="nav-link">
          <SearchBar search={search} setSearch={setSearch} />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link className="nav-link">
          Sign In
          <BoxArrowInRight size={25} />
        </Nav.Link>
      </Nav.Item>
      <Link to="/">
        <Button variant="success">Home</Button>
      </Link>
    </Nav>
  );
}
