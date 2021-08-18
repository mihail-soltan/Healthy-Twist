import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Cuisine({recipes, cuisine }) {

const colors = ["#CD8D80", "#A2ADA8", "#A27053", "#AD6D56", "#857585"]

    return (
        <>
            <div className="cuisine">
                {cuisine.map((item) =>
                    <Link to={`/recipes/${item.name}`}>
                        <Button className="p-2" size="sm" style={{backgroundColor: "#3D393F", border: "none", width: "12vw"}}>{item.name}</Button>{' '}
                    </Link>
                )}
                {/* <Link to="/recipes/Vegetarian">
                    <Button size="sm" variant="success">Vegetarian</Button>{' '}
                </Link> */}
                {/* <Button size= "sm" variant="danger">Mexican</Button>{' '} */}
                {/* <Button size= "sm" variant="warning">Japanese</Button>{' '} */}
                {/* <Button size= "sm" variant="success">Indian</Button> {' '} */}
                {/* <Button size= "sm" variant="danger">Asian</Button> {' '} */}
                {/* <Button size= "sm" variant="info">Greek</Button>{' '} */}
                {/* <Button size= "sm" variant="warning">Spanish</Button>{' '} */}
                {/* <Button size= "sm" variant="primary">American</Button>{' '} */}
            </div>
        </>
    )

}
