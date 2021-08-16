import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import RecipeCarousel from './RecipeCarousel';
import Chef from "./Chef"
import { useEffect, useState } from "react"
import { Switch, Route } from 'react-router-dom'
import Cuisine from './Cuisine'
import List from './List'

function App() {
  const [chefData, setChefData] = useState([])
  const [storyTitle, setStoryTitle] = useState('')
  const [story, setStory] = useState('')
  const [chefPic, setChefPic] = useState('')
  const [recipes, setRecipes] = useState([])
  const [cuisine, setCuisine] = useState([])
  useEffect(() => {

    const contentful = `https://cdn.contentful.com/spaces/6sqp9xuzzgbv/environments/master/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}&content_type=chefStory`
    const recipesAPI = `https://healthy-twist.herokuapp.com/posts`
    const cuisineAPI = `https://healthy-twist.herokuapp.com/cuisines`
    fetch(contentful)
      .then((res) => res.json())
      .then((result) => {

        setChefData(result.items);
        setStoryTitle(result.items[0].fields.chefStoryTitle)
        setChefPic(`${result.includes.Asset[0].fields.file.url}?w=500&h=500`)
        setStory(result.items[0].fields.chefStoryText)
        // console.log(result)
      }

      )
    fetch(recipesAPI)
      .then((res) => res.json())
      .then((res) => {setRecipes(res)
        // console.log(res)
        // setRecipePics(res)
        // setRecipePic(res[12].Picture.url)
        // console.log(res[12].Picture.url)
        // console.log(recipePics)
        // console.log('hello')
        console.log(res[0].cuisine.name)
      });
      console.log(recipes)
    fetch(cuisineAPI)
      .then((res) => res.json())
      .then((res) => {setCuisine(res)
      
        console.log(res)
      })




  }, [])
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Cuisine recipes={recipes} cuisine={cuisine}/>
          <RecipeCarousel recipes={recipes} />
          <Chef chefData={chefData} storyTitle={storyTitle} chefPic={chefPic} story={story} />
        </Route>
        <Route  path='/recipes/:cuisine'>
          <List recipes={recipes} />
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
