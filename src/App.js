import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RecipeCarousel from "./RecipeCarousel";
import Chef from "./Chef";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipePage from "./RecipePage";
import Cuisine from "./Cuisine";
import List from "./List";

function App() {
  const [chefData, setChefData] = useState([]);
  const [storyTitle, setStoryTitle] = useState("");
  const [story, setStory] = useState("");
  const [chefPic, setChefPic] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const contentful = `https://cdn.contentful.com/spaces/6sqp9xuzzgbv/environments/master/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}&content_type=chefStory`;
    const recipesAPI = `https://healthy-twist.herokuapp.com/posts`;
    const cuisineAPI = `https://healthy-twist.herokuapp.com/cuisines`;

    fetch(contentful)
      .then((res) => res.json())
      .then((result) => {
        setChefData(result.items);
        setStoryTitle(result.items[0].fields.chefStoryTitle);
        setChefPic(`${result.includes.Asset[0].fields.file.url}?w=500&h=500`);
        setStory(result.items[0].fields.chefStoryText);
      });

    fetch(recipesAPI)
      .then((res) => res.json())
      .then((res) => {
        setRecipes(res);
        console.log(res[0].cuisine.name);
      });
    console.log(recipes);
    fetch(cuisineAPI)
      .then((res) => res.json())
      .then((res) => {
        setCuisine(res);
        setIsLoading(false);

        console.log(res);
      });
  }, []);
  const filteredRecipes =
    recipes.length === 0
      ? recipes
      : recipes.filter((post) => {
          const index = post.Title.toLowerCase();
          // post.fields.userStroyAboutRecepie.toLowerCase();
          // console.log(index)
          return index.includes(search.toLowerCase());
          console.log(post.Title);
        });

  return (
    <div className="App">
      {isLoading ? (
        <h2>blabla</h2>
      ) : (
        <div>
          <Navbar recipes={recipes} search={search} setSearch={setSearch} />
          <Switch>
            <Route exact path="/">
              <Cuisine recipes={recipes} cuisine={cuisine} />
              <RecipeCarousel recipes={recipes} />
              <Chef
                chefData={chefData}
                storyTitle={storyTitle}
                chefPic={chefPic}
                story={story}
              />
            </Route>
            <Route path="/recipe/:recipeTitle">
              <RecipePage isLoading={isLoading} recipes={recipes} />
            </Route>
            <Route path="/recipes/:cuisine">
              <List recipes={filteredRecipes} />
            </Route>
          </Switch>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
