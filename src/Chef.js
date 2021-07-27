
import ReactTextCollapse from "react-text-collapse"

const TEXT_COLLAPSE_OPTIONS = {
    collapse: false, // default state when component rendered
    collapseText: '... show more', // text to show when collapsed
    expandText: 'show less', // text to show when expanded
    minHeight: 100, // component height when closed
    maxHeight: 850, // expanded to
    textStyle: { // pass the css for the collapseText and expandText here
      color: "blue",
      fontSize: "20px"
    }
  }

const Chef = ({chefData, storyTitle, chefPic, story}) => {
    
    if(chefData.length){
        return <>
            <div className="chef-article">
            <h1>{storyTitle}</h1>
        <article className="chef-story">
            <span><img src={chefPic}></img>
            </span>
            <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
           <p className="article-text">{story}</p>
           </ReactTextCollapse>
        </article> 
            </div>
        </>
    } else{
        return <>
            <h1>Loading</h1>
        </>
    }
    
}

export default Chef