import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {


    return (
        <div>
            <Container >
                <Row className="row g-0">
                    <Col className="login" >
                        <Form className="login-form" >
                            <Form.Label style={{fontSize: "25px", textAlign: "center"}}>Sign Up to join Healthy Twist community!</Form.Label>
                            <Form.Group className="mb-2 text-muted" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-2 text-muted" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-4 text-muted" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="submit-btn" style={{backgroundColor: "#3B3F39", color: "whitesmoke"}} type="submit">
                                Sign Up
                            </Button>
                            <Link to="/login">
                            <Card.Link className="signup-link" >I already have an account...</Card.Link>
                            </Link>
                        </Form>
                    </Col>
                    <Col className="pic ">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
