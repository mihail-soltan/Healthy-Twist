import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

const RecipePage =()=>{
 const {recipeTitle}= useParams();
  const [recipes, setRecipes] = useState([])
  const [isLoading,setisLoading] =  useState(true)
console.log(recipeTitle)
  useEffect(()=>{
fetch(`https://cdn.contentful.com/spaces/6sqp9xuzzgbv/environments/master/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}&content_type=post`)
          .then((res) => res.json())
          .then((res) => {setRecipes(res.items)
         setisLoading(false) });
  },[])

console.log(recipes)
const displayRecipe = Object.values(recipes).filter(recipe => recipe.sys.id === recipeTitle
);
const [theRecipe] = displayRecipe;


 return isLoading ? ( <h1>The data is on its way</h1>) : (
   
 <div>
 <Accordion defaultActiveKey="1"  flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header><h2>{theRecipe.fields.title}</h2></Accordion.Header>
    <Accordion.Body>
      Posted on: {theRecipe.fields.publishedDate}
      <br />
      {theRecipe.fields.userStroyAboutRecepie}
    </Accordion.Body>
  </Accordion.Item>
 </Accordion>
 <Image src="//images.ctfassets.net/6sqp9xuzzgbv/5iNvHTm60kc0uO9hB4gclM/0602b413eb46218268a6468de70d293c/Gordon-Ramsay-1.jpg?w=750&h=750"  />
 <br />
 <br />
<Container>
  <Row>
    <Col>  <ListGroup as="ul" style={{ width: '20em' }}>
  <ListGroup.Item as="li" className = 'listgroup-heading' active style ={{backgroundColor: 'darkgreen'}}>
   Ingredients
  </ListGroup.Item>
            {theRecipe.fields.ingredients.map((item) => (
              <ListGroup.Item as="li" key={Math.random(Math.floor) * 100}>{item}
              </ListGroup.Item>
            ))}
           
        
 </ListGroup></Col>
    <Col>
   
    <p>Ready to get on the sous vide cooking train?__ Welcome, friend: We’ve been expecting you.__ You’re about to experience the closest thing to actual magic that ever happens in the kitchen. Below you’ll find everything you need to get started, from the necessary equipment to a step-by-step guide to the process, along with Bon Appétit Test Kitchen-developed recipes and a basic time and temperature guide for when you’re ready to do your own thing. __This is going to be fun.__ As with all successful meat cookery, the first step is to season your protein, and season it well. Give it a thorough rub down with plenty of kosher salt, along with any dried spices or pastes you like—freshly ground black pepper, chile powder, curry, harissa paste, whatever you want. One of the advantages of sous vide cooking is that those seasonings get sealed right up against the meat, and have plenty of time work their way in, leading to big flavor. Once your meat is good and seasoned, slide it into either a food-grade vacuum sealing bag (the gold standard, and what most restaurants use) or a sturdy resealable freezer bag (the best grocery store-available option). At this point you can add any larger aromatics—sprigs of hardy herbs like rosemary or thyme, bay leaves, whole dried chiles—positioning them in direct contact with the meat so that when the bag is sealed, they're locked in place. </p>
    
    </Col>
  </Row>
   </Container> 

 </div>
 
 )


}

export default RecipePage