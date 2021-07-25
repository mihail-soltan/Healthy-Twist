import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import RecipeCarousel from './RecipeCarousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RecipeCarousel/>
      <Footer />
      

    </div>
  );
}

export default App;
