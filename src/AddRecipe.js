import React from "react";
import "./AddRecipe.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const AddRecipe = () => {
  return (
    <div className="addRecipePage">
      <h1>Share a Recipe </h1>
      <h5>Share your recipe with us</h5>
      <Form>
        <label>Title</label>
        <input type="text" placeHolder="Enter Title"></input>
        <br />
        <label>Published</label>
        {/* Need to add Calendar for Date */}
        <input type="date"></input>
        <input type="time"></input>
        <br />
        <label>UserStory</label>
        <br />
        <textarea rows="4" cols="50" name="comment" form="usrform">
          Enter UserStory here...
        </textarea>
        <br />
        <label>PrepTime</label>
        <br />
        <input type="number" placeHolder="1"></input>
        <br />
        <label>Ingredients</label>
        <br />
        <textarea rows="4" cols="50" name="comment" form="usrform">
          List out your Ingredients here...
        </textarea>
        <br />
        <label>Recipe</label>
        <br />
        <textarea rows="4" cols="50" name="comment" form="usrform">
          Enter the Recipe here...
        </textarea>
        <br />
        <button type="button">Submit</button>
        <button type="button">Reset!</button>
      </Form>
    </div>
  );
};

export default AddRecipe;
