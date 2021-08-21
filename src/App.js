import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RecipeCarousel from "./RecipeCarousel";
import Chef from "./Chef";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import RecipePage from "./RecipePage";
import Cuisine from "./Cuisine";
import AddRecipe from "./AddRecipe";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

import List from "./List";
import Login from "./Login";
import Signup from "./Signup";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
.App {
  background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
  color: ${props => props.theme.mode === 'dark' ? '#00090B' : '#111'};
}
.container {
  background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
  color: ${props => props.theme.mode === 'dark' ? '#00090B' : '#111'};
}
.chef-article {
  color: ${props => props.theme.mode === 'dark' ? '#fbffff' : '#111'};
}
`

function App() {
  const [chefData, setChefData] = useState([]);
  const [storyTitle, setStoryTitle] = useState("");
  const [story, setStory] = useState("");
  const [chefPic, setChefPic] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState({mode: 'light'})
  const [modeButton, setModeButton] = useState(false)

  useEffect(() => {
    const contentful = `https://cdn.contentful.com/spaces/6sqp9xuzzgbv/environments/master/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}&content_type=chefStory`;
    const recipesAPI = `https://healthy-twist.herokuapp.com/posts`;
    const cuisineAPI = `https://healthy-twist.herokuapp.com/cuisines`;

    // fetch(contentful)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setChefData(result.items);
    //     setStoryTitle(result.items[0].fields.chefStoryTitle);
    //     setChefPic(`${result.includes.Asset[0].fields.file.url}?w=500&h=500`);
    //     setStory(result.items[0].fields.chefStoryText);
    //   });

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
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => setDarkMode(!darkMode);
  console.log(darkMode);

  return (
    <ThemeProvider theme={theme}>
      
      <GlobalStyle setTheme={setTheme}/>
    <div className="App">
      {isLoading ? (
        <div style={{marginTop: "50vh"}}>
          <PropagateLoader size={40}/>
          </div>
      ) : (
        <div>
          <Navbar recipes={recipes} search={search} setSearch={setSearch} theme={theme} setTheme={setTheme} modeButton={modeButton} setModeButton={setModeButton}/>
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/addrecipe">
              <AddRecipe />
            </Route>
          </Switch>
         <Footer />
        </div>
      )}
    </div>
    </ThemeProvider>
  );
}

export default App;
