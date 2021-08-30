import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Item({ recipes }) {
  const { cuisine } = useParams();

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center" lg={3} md={2}>
          {/* <Col> */}
            {recipes
              .filter((food) => food.cuisine.name === cuisine)
              .map((item) => (
                <Card style={{ width: "25rem", margin: "20px" }} key={item.id}>
                  <Card.Img variant="top" src={item.Picture.url} />
                  <Card.Body>
                    <Card.Title>{item.Title}</Card.Title>
                    <Card.Text>{item.userStory}</Card.Text>
                    <Link to={`/recipe/${item.id}`}>
                      <Button variant="outline-success">Read Recipe</Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))}
          {/* </Col> */}
        </Row>
      </Container>
    </>
  );
}
