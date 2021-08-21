import React, { useState } from "react";
import "./AddRecipe.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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
          <h1>Share a Recipe </h1>
          <h5>Share your recipe with us</h5>
          <Form onSubmit={handleOnSubmit}>
            <label>Title</label>
            <input
              type="text"
              placeHolder="Enter Title"
              value={recipeTitle}
              onChange={handleTitleChange}
            ></input>
            <br />
            <br />
            <label>Published</label>
            {/* Need to add Calendar for Date */}
            <input
              type="date"
              value={publishedDate}
              onChange={handlepublishedDateChange}
            ></input>
            <input type="time" value="time"></input>
            <br />
            <label>UserStory</label>
            <br />
            <textarea
              rows="4"
              cols="50"
              value={userStory}
              form="usrform"
              onChange={handleuserStoryChange}
            >
              Enter UserStory here...
            </textarea>
            <br />
            <label for="cuisine">Cuisine Type</label>
            <br />
            <select
              id="cuisine"
              value={cuisineType}
              onChange={handlecuisineTypeChange}
            >
              <option>Select Cuisine </option>
              <option value="german">German</option>
              <option value="italian">Italian</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="mexican">Mexican</option>
              <option value="asian">Asian</option>
            </select>
            <br />
            <label>PrepTime</label>
            <br />
            <input
              type="number"
              placeHolder="1"
              value={prepTime}
              onChange={handleprepTimeChange}
            ></input>
            <br />
            <label>Ingredients</label>
            <br />
            <textarea
              rows="4"
              cols="50"
              value={ingredients}
              onChange={handleingredientsChange}
              form="usrform"
            >
              List out your Ingredients here...
            </textarea>
            <br />
            <label>Recipe</label>
            <br />
            <textarea
              rows="4"
              cols="50"
              value={recipeText}
              onChange={handlerecipeTextChange}
              form="usrform"
            >
              Enter the Recipe here...
            </textarea>
            <br />
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
