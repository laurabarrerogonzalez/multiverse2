import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import "./Cards.css";

function Cards2() {
  const products = [
    {
      title: "Goku SSJ1",
      imageSrc:
        "https://res.cloudinary.com/dq2tfglqq/image/upload/v1693326500/funko_goku_ssj-removebg-preview_xaicdq.png",
      description: "DragonBallZ / FunkoPop...",
    },
    {
      title: "Ironman",
      imageSrc:
        "https://res.cloudinary.com/dq2tfglqq/image/upload/v1693326501/funko_ironman-removebg-preview_xy5ju2.png",
      description: "Marvel / FunkoPop...",
    },
    {
      title: "Boo",
      imageSrc:
        "https://res.cloudinary.com/dq2tfglqq/image/upload/v1694424693/funko_majin_boo-removebg-preview_vf4yhz.png",
      description: "DragonBallZ / FunkoPop...",
    },
  ];

  const [likedProducts, setLikedProducts] = useState(products.map(() => false));

  const handleLikeClick = (idx) => {
    const updatedLikedProducts = [...likedProducts];
    updatedLikedProducts[idx] = !updatedLikedProducts[idx];
    setLikedProducts(updatedLikedProducts);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row xs={1} md={3} className="g-4">
        {products.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img src={product.imageSrc} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="buttoms">
                  <Button className="button-buy-now-home" variant="primary">
                    Buy Now
                  </Button>{" "}
                  <Button
                    className="button-like"
                    variant="link"
                    style={{
                      color: likedProducts[idx] ? "red" : "white", // Cambiar colores aquí
                    }}
                    onClick={() => handleLikeClick(idx)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards2;
