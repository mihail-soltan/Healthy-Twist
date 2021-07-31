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

const RecipePage = ({ isLoading, recipes }) => {
  const { recipeTitle } = useParams();

  console.log(recipeTitle);

  console.log(recipes);
  const displayRecipe = Object.values(recipes).filter(
    (recipe) => recipe.sys.id === recipeTitle
  );
  const [theRecipe] = displayRecipe;
  console.log(theRecipe.fields.title);

  const body = marked(theRecipe.fields.recipe2 || "");

  //
  return isLoading ? (
    <h1>The data is on its way</h1>
  ) : (
    <div>
      <Accordion defaultActiveKey="1" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h2>{theRecipe.fields.title}</h2>
          </Accordion.Header>
          <Accordion.Body>
            Posted on: {theRecipe.fields.publishedDate}
            <br />
            {theRecipe.fields.userStroyAboutRecepie}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Image src="//images.ctfassets.net/6sqp9xuzzgbv/5iNvHTm60kc0uO9hB4gclM/0602b413eb46218268a6468de70d293c/Gordon-Ramsay-1.jpg?w=750&h=750" />
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
              {theRecipe.fields.ingredients.map((item) => (
                <ListGroup.Item as="li" key={Math.random(Math.floor) * 100}>
                  {item}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <article dangerouslySetInnerHTML={{ __html: body }}></article>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecipePage;
