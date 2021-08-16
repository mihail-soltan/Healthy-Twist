import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export default function RecipeCarousel({ recipes, recipePic }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel infinite={true} draggable={true} responsive={responsive}>
      {recipes.length ? (
        recipes.map((item) => (
          <div className="recipes">
            <Card style={{ width: "18em" }}>
              <Card.Img variant="top" src={item.Picture.url} />
              <Card.Body>
                <Card.Title>{item.Title}</Card.Title>
                <Card.Text>{item.userStory}</Card.Text>
                <Link to={`/recipe/${item.id}`}>
                  <Button variant="success">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </Carousel>
  );
}
