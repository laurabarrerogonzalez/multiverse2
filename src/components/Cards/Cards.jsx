import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import './Cards.css'


function Cards() {

    const products = [
   
     {
          title: 'Funko-Guason',
          imageSrc: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1693326501/funko_guason-removebg-preview_ozmh6u.png',
          description: 'DC Comics / FunkoPop...',
        },
        {
            title: 'Funko-Superma',
            imageSrc: 'https://res.cloudinary.com/dq2tfglqq/image/upload/v1693326501/funko_superman-removebg-preview_yu2nkl.png',
            description: 'DC Comics / FunkoPop...',
          },
          {
            title: 'Funko-Spiderma',
            imageSrc: 'https://res.cloudinary.com/duwenv0yr/image/upload/v1693303883/FunkoSpiderman_mhetsb.png',
            description: 'Marvel / FunkoPop...',
          },
        
   
          ];

          

    const [likedProducts, setLikedProducts] = useState(
        products.map(() => false)
      );

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
          <div className='new-label'> NEW </div>
            <Card.Img src={product.imageSrc} />
            <Card.Body>  
              
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
      <div className='buttoms'>
        <Button className='button-buy-now-home' variant="primary">Buy Now</Button>{' '}
          <Button className='button-like' 
                            variant="link"
                            style={{
                              color: likedProducts[idx] ? 'red' : 'white', // Cambiar colores aquí
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


export default Cards;