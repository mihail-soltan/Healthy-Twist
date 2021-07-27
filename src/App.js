import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import RecipeCarousel from './RecipeCarousel';
import Chef from "./Chef"
import { useEffect, useState } from "react"


function App() {
  const [chefData, setChefData] = useState([])
  const [storyTitle, setStoryTitle] = useState('')
  const [story, setStory] = useState('')
  const [chefPic, setChefPic] = useState('')
  const [recipes, setRecipes] = useState([])
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
        setIsLoading(false)
      }
            
        )
  fetch(recipesAPI)
          .then((res) => res.json())
          .then((res) => setRecipes(res.items));
  
  }, [])


  return (
    <div className="App">
      {isLoading ? <h2>blabla</h2> : 
      (
      <div>
      <Navbar />
      <RecipeCarousel recipes={recipes}/>
      <Chef chefData={chefData} storyTitle={storyTitle} chefPic={chefPic} story={story}/>
      <Footer />
      </div>)
      }
      
    </div>
  );
}

export default App;
