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
                <Row className="g-0">
                    <Col className="login" >
                        <Form className="login-form" >
                            <Form.Label style={{ fontSize: "25px" }}>Login to continue</Form.Label>
                            <Form.Group className="mb-3 text-muted" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 text-muted" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="submit-btn" style={{ backgroundColor: "#3B3F39", color: "whitesmoke" }} type="submit">
                                Login
                            </Button>
                            <Link to="/signup">
                                <Card.Link className="signup-link">Don't have an account? Sign up</Card.Link>
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
