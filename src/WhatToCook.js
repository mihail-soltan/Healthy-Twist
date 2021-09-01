import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import "./WhatToCook.css";
export default function WhatToCook() {
  return (
    <div>
      <Container>
        <Row>
          <h1>Use Up Leftovers</h1>
          <p>
            Choose up to 3 ingredients. HealthyTwist will tell you what you can
            make!
          </p>
          <Col className="cardBody">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83_3NYgp0S25R4n9OplLwF209r1s0eiG2Zg&usqp=CAU"
                style={{ width: "286px", height: "195px" }}
              />
              <Card.Body>
                <Card.Title>Ingredient No.1</Card.Title>
                <Form.Control type="text" placeholder="Ingredient" />

                {/* <Card.Text></Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd7KVVG7WZSAXcD-TxGh8Rr-UXm0RTW6xmPQ&usqp=CAU"
                style={{ width: "286px", height: "195px" }}
              />
              <Card.Body>
                <Card.Title>Ingredient No.2</Card.Title>
                <Form.Control type="text" placeholder="Ingredient" />

                {/* <Card.Text></Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISa22R98V3wxkKt_Y6cn86fidD5PS-hgTSw&usqp=CAU"
                style={{ width: "286px", height: "195px" }}
              />
              <Card.Body>
                <Card.Title>Ingredient No.3</Card.Title>
                {/* <Card.Text></Card.Text> */}
                <Form.Control type="text" placeholder="Ingredient" />
                <br />
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col className="findrecipe">
            <Button
              className="submit-btn"
              style={{ backgroundColor: "#3B3F39", color: "whitesmoke" }}
              type="submit"
            >
              Find Recipes
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
