import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReactStars from "react-rating-stars-component";
import { TextCenter } from "react-bootstrap-icons";

export default function CommentSection() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Row className="justify-content-md-center">
    <Col xs={6} md={8}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Nickname" />
        </Form.Group>
        <Row className="justify-content-md-center">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={36}
          activeColor="#ffd700"
          className="stars"
        /></Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Leave a comment" />
        </Form.Group>

        <Button type="submit" variant="outline-success">
          Submit
        </Button>
      </Form>
    </Col>
    </Row>
  );
}
