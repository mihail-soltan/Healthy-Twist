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
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
     setIsLoading(false) });

  }, [])


  const filteredStory =
  recipes.length === 0
      ? recipes
      : recipes.filter((post) => {
        const index = post.fields.title.toLowerCase() 
        + post.fields.userStroyAboutRecepie.toLowerCase()
       // console.log(index)
        return index.includes(search.toLowerCase()) 
      }
         
        );

  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      {isLoading ? <h2>blabla</h2> :
        (
          <div>
            <Navbar recipes={recipes} search={search} setSearch={setSearch} />
            <RecipeCarousel recipes={filteredStory} />
            <Chef chefData={chefData} storyTitle={storyTitle} chefPic={chefPic} story={story} />
            <Footer />
          </div>)
      }

    </div>
>>>>>>> test
  );
}
// 

export default App;
