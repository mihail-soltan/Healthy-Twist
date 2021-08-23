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
import Markdown from "markdown-to-jsx";
import "./RecipePage.css";

const RecipePage = ({ isLoading, recipes }) => {
  const { recipeTitle } = useParams();
  console.log(recipes);
  const displayRecipe = recipes.filter((recipe) => recipe.id === recipeTitle);
  const [theRecipe] = displayRecipe;

  const body = marked(theRecipe.recipe || "");
  const ingredientArray = theRecipe.ingredients.split("-");
  console.log(recipes);
  //
  return isLoading ? (
    <h1>The data is on its way</h1>
  ) : (
    < >
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
      <Container fluid="md">
        <Row className="justify-content-md-center m-4" as="recipeRow" >
          <Image className="photo" src={theRecipe.Picture.url} />
          </Row>
          <Row className="ingredients">
          <Col>
            <ListGroup as="ul" className="recipe-instructions">
              <ListGroup.Item
                as="li"
                className="listgroup-heading"
                style={{ backgroundColor: "#064420", color: "ghostwhite" }}
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
            <Markdown className="recipe-text">{theRecipe.recipe}</Markdown>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecipePage;
