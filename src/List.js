import { useParams, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Item({ recipes }) {
    const { cuisine } = useParams();
  
    return (
        <>

                <Container bsPrefix="container">
                    <Row>
                        
            {recipes.filter((food)=> food.cuisine.name === cuisine).map((item) =>
                        <Card style={{ width: '20em', margin: '5px' }} key={item.id}>
                            <Card.Img variant="top" src={item.Picture.url} />
                            <Card.Body>
                                <Card.Title>{item.Title}</Card.Title>
                                <Card.Text>{item.userStory}
                                </Card.Text>
                                <Link to={`/recipe/${item.id}`}>
                                
                                    <Button variant="success">{item.id}</Button>
                                
                                </Link>
                            </Card.Body>
                        </Card>
                    )}
                    </Row>
                </Container>


    </>
    )
}