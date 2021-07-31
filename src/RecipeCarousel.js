import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function RecipeCarousel({ recipes }) {
  const [index, setIndex] = useState(1);
  const [recipesPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelect = (selectedIndex, pageNumber) => {
    setIndex(selectedIndex);
    setCurrentPage(index);
    console.log(index);
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const pageNumbers = useState([]);

  const totalRecipes = recipes.length;
  for (let i = 1; i < Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      variant="dark"
      recipesPerPage={recipesPerPage}
      totalRecipes={recipes.length}
    >
      {pageNumbers.map((number) => (
        <Carousel.Item key={number}>
          <div className="recipes">
            {currentRecipes.map((item) => (
              <Card style={{ width: "20em" }}>
                <Card.Img
                  variant="top"
                  src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg"
                />
                <Card.Body>
                  <Card.Title>{item.fields.title}</Card.Title>
                  <Card.Text>{item.fields.userStroyAboutRecepie}</Card.Text>

                  <Link to={`/recipe/${item.sys.id}`}>
                    <Button variant="success">Go somewhere</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
