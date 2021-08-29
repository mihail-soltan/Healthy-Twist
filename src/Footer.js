import Card from "react-bootstrap/Card";

export default function Footer() {
  const styles = {
    position: "relative",
    width: "100%",
    marginTop: "4vh",
    bottom: 0,
    backgroundColor: "whitesmoke",
    borderTop: "1.5px solid #3B3F39",
  };
  return (
    <Card className="rounded-0" style={styles}>
      <Card.Body>
        <Card.Text
          style={{
            backgroundColor: "whitesmoke",
            color: "#3B3F39",
            fontSize: "16px",
          }}
        >
          Sherine | Mihail | Natalia | all rights reserved © 2021
          <img
            alt="instagram"
            src="https://img.icons8.com/ios-glyphs/30/000000/instagram-circle.png"
            style={{ marginLeft: "3vw" }}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
