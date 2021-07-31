import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Cuisine() {

    return (
        <>
            <div className="cuisine">
                <Link to="/recipes">
                <Button size= "sm" variant="primary">Italian</Button>{' '}
                <Button size= "sm" variant="success">Vegan</Button>{' '}
                <Button size= "sm" variant="danger">Mexican</Button>{' '}
                <Button size= "sm" variant="warning">Japanese</Button>{' '}
                <Button size= "sm" variant="success">Indian</Button> {' '}
                <Button size= "sm" variant="danger">Asian</Button> {' '}
                <Button size= "sm" variant="info">Greek</Button>{' '}
                <Button size= "sm" variant="warning">Spanish</Button>{' '}
                <Button size= "sm" variant="primary">American</Button>{' '}
                </Link>
            </div>
        </>
    )

}