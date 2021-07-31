import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import RecipeCarousel from './RecipeCarousel';
import Chef from "./Chef"
import { useEffect, useState } from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RecipePage from './RecipePage'


function App() {
  const [chefData, setChefData] = useState([])
  const [storyTitle, setStoryTitle] = useState('')
  const [story, setStory] = useState('')
  const [chefPic, setChefPic] = useState('')
  const [recipes, setRecipes] = useState([])
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {

    const contentful = `https://cdn.contentful.com/spaces/6sqp9xuzzgbv/environments/master/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}&content_type=chefStory`
    const recipesAPI = `https://cdn.contentful.com/spaces/6sqp9xuzzgbv/environments/master/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}&content_type=post`
    fetch(contentful)
      .then((res) => res.json())
      .then((result) => {
        
        setChefData(result.items);
        setStoryTitle(result.items[0].fields.chefStoryTitle)
        setChefPic(`${result.includes.Asset[0].fields.file.url}?w=500&h=500`)
        setStory(result.items[0].fields.chefStoryText)
        console.log(result)
      }
            
        )
  fetch(recipesAPI)
          .then((res) => res.json())
          .then((res) => {setRecipes(res.items)
         setisLoading(false) });
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Router>
      <Switch>
        <Route exact path="/">
          <RecipeCarousel recipes={recipes}/>
          <Chef chefData={chefData} storyTitle={storyTitle} chefPic={chefPic} story={story}/>
        </Route>
        <Route path="/recipe/:recipeTitle">
          <RecipePage />        
        </Route>
      </Switch>  
    </Router>
     <Footer />
     </div>
  );
}
// 

export default App;
