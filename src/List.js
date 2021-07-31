import { useParams, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Item({ recipes }) {
    // const { selectedArticleID } = useParams()
    // const item = recipes.find(item => item.objectID === selectedArticleID)
    return (
        <>
            <Link to="/">
                <Button variant="success">Go back</Button>
            </Link>
                <Container>
                    <Row>
                        {/* <Col>1 of 3</Col> */}
                        {/* <Col md="auto"> */}
                        
            {recipes.map((item) =>
                        <Card style={{ width: '20em', margin: '5px' }}>
                            <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" />
                            <Card.Body>
                                <Card.Title>{item.fields.title}</Card.Title>
                                <Card.Text>{item.fields.userStroyAboutRecepie}
                                </Card.Text>
                                <Link to="{`/${msg._id.$oid}`">
                                    <Button variant="success">Go somewhere</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    )}
                        {/* </Col> */}
                        {/* <Col>3 of 3</Col> */}
                    </Row>
                </Container>


    </>
    )
}