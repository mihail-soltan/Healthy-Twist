import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import marked from "marked";
import "./RecipePage.css";

const RecipePage = ({ isLoading, recipes }) => {
  const { recipeTitle } = useParams();
  console.log(recipes);
  const displayRecipe = recipes.filter((recipe) => recipe.id === recipeTitle);
  const [theRecipe] = displayRecipe;

  const body = marked(theRecipe.recipe || "");
  const ingredientArray = theRecipe.ingredients.split("-");
  const recipeArray = theRecipe.recipe.split(".");
  console.log(recipes);
  console.log(recipeArray);

  //
  return isLoading ? (
    <h1>The data is on its way</h1>
  ) : (
    <div>
      <Accordion defaultActiveKey="1" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h2>{theRecipe.Title}</h2>
          </Accordion.Header>
          <Accordion.Body>
            Posted on: {theRecipe.published_at}
            <br />
            {theRecipe.userStory}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Image className="photo" src={theRecipe.Picture.url} />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            {" "}
            <ListGroup as="ul" style={{ width: "20em" }}>
              <ListGroup.Item
                as="li"
                className="listgroup-heading"
                active
                style={{ backgroundColor: "darkgreen" }}
              >
                Ingredients
              </ListGroup.Item>
              {ingredientArray.map((item) => (
                <ListGroup.Item as="li" key={Math.random(Math.floor) * 100}>
                  {item}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            {/* <article dangerouslySetInnerHTML={{ __html: body }}></article> */}
            <p>{recipeArray}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecipePage;
