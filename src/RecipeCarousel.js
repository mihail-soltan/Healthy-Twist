import Carousel from "react-bootstrap/Carousel"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useState } from "react";
export default function RecipeCarousel({recipes}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
            <Carousel.Item>
                <div className="recipes">
            {recipes.map((item) =>
                <Card style={{ width: '20em' }}>
                    <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" />
                    <Card.Body>
                        <Card.Title>{item.fields.title}</Card.Title>
                        <Card.Text>{item.fields.userStroyAboutRecepie}
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
                    )}
                {/* <Card style={{ width: '18rem' }}> */}
                    {/* <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" /> */}
                    {/* <Card.Body> */}
                        {/* <Card.Title>{item.fields.title}</Card.Title> */}
                        {/* <Card.Text>{item.fields.userStroyAboutRecepie} */}
                        {/* </Card.Text> */}
                        {/* <Button variant="success">Go somewhere</Button> */}
                    {/* </Card.Body> */}
                {/* </Card> */}
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card> */}

                </div>
            </Carousel.Item>
            {/* <Carousel.Item>
            <div className="recipes">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>

                </div>

                
            </Carousel.Item>
            <Carousel.Item>
            <div className="recipes">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>

                </div>
            </Carousel.Item> */}
        </Carousel>
    );
}