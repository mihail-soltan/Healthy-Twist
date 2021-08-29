import React, { useState } from "react";
import "./AddRecipe.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { InputGroup } from "react-bootstrap";

const AddRecipe = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [userStory, setUserStory] = useState("");
  const [cuisineType, setCuisineType] = useState("German");
  const [prepTime, setPrepTime] = useState(10);
  const [ingredients, setIngredients] = useState([]);
  const [recipeText, setRecipeText] = useState("");
  const [newRecipe, setNewRecipe] = useState({});

  const handleTitleChange = (e) => {
    setRecipeTitle(e.target.value);
  };
  const handlepublishedDateChange = (e) => {
    setPublishedDate(e.target.value);
  };
  const handleprepTimeChange = (e) => {
    setPrepTime(e.target.value);
  };
  const handleuserStoryChange = (e) => {
    setUserStory(e.target.value);
  };
  const handlecuisineTypeChange = (e) => {
    setCuisineType(e.target.value);
  };
  const handleingredientsChange = (e) => {
    setIngredients(e.target.value);
  };
  const handlerecipeTextChange = (e) => {
    setRecipeText(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  // asycn postData(){
  //    const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ title: 'React POST Request Example' })
  //   };
  //   const response = await fetch('https://reqres.in/api/posts', requestOptions);
  //   const data = await response.json();
  //   this.setState({ postId: data.id });
  // };
  return (
    <div className="addRecipePage">
      <Container>
        <Row>
          <h1>Share Your Recipe </h1>
          <Form onSubmit={handleOnSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                onChange={handleTitleChange}
                as="title"
              >
                Title
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            {/* <label>Published</label> */}
            {/* Need to add Calendar for Date */}
            {/* <input
              type="date"
              value={publishedDate}
              onChange={handlepublishedDateChange}
            ></input>
            <input type="time" value="time"></input>
            <br /> */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Tell us a story about your recipe"
              />
            </Form.Group>
            <br />
            <Form.Label>Cuisine Type</Form.Label>
            <br />
            <Form.Select
              aria-label="Default select example"
              value={cuisineType}
              onChange={handlecuisineTypeChange}
            >
              <option>Select Cuisine </option>
              <option value="german">German</option>
              <option value="italian">Italian</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="mexican">Mexican</option>
              <option value="asian">Asian</option>
            </Form.Select>
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Prep Time</Form.Label>
              <Form.Control type="number" onChange={handleprepTimeChange}/>
            </Form.Group>
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                
                value={ingredients}
                onChange={handleingredientsChange}
              />
            </Form.Group>
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Recipe</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                
                value={recipeText}
                onChange={handlerecipeTextChange}
              />
            </Form.Group>
           
            <Button
              className="submit-btn"
              style={{ backgroundColor: "#3B3F39", color: "whitesmoke" }}
              type="submit"
            >
              Submit Recipe
            </Button>
            {/* onClick ={postData()} */}
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default AddRecipe;
