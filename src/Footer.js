import Card from 'react-bootstrap/Card';

export default function Footer() {

const styles ={
    position: "absolute",
    width: "100%",
    margin: 0,
    bottom: 0,
}
    return (
            <Card bg="secondary" className="mb-2 rounded-0" style={styles}>
                <Card.Body>
                    <Card.Text style={{color: "white", fontSize: "12px"}}>
                        Sherine | Mihail | Natalia | all rights reserved © 2021
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-circle.png" style={{marginLeft: "3vw"}}/>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
    )
}
