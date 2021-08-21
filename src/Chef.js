import ReactTextCollapse from "react-text-collapse"
import Markdown from 'markdown-to-jsx';
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

const Chef = ({ chefData, storyTitle, chefPic, story }) => {

    if (chefData.length) {
        return (
        <div id="story">
            <div className="chef-article">
                <h1>{storyTitle}</h1>
                <article className="chef-story">
                    <span><img className="chefPic" src={chefPic}></img>
                    </span>
                    <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                        <Markdown>
                            {story}
                        </Markdown>
                    </ReactTextCollapse>
                </article>
            </div>
        
        </div>
        )
    } else {
        return <>
            <h1>Loading</h1>
        </>
    }

}

export default Chef