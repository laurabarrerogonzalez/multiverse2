import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../posters/poster.css';

const Posters = ({ addToCart }) => {
  const [posters, setPosters] = useState([]);
  const [likedProduct, setLikedProduct] = useState(posters.map(() => false));

  useEffect(() => {
    // Realiza una solicitud para obtener los productos de la categoría "Poster" desde tu API.
    axios.get('https://localhost:7106/Product/GetProductsByCategoryId?categoryId=6')
      .then((response) => {
        setPosters(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener Posters:', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleLikeClick = (idx) => {
    const updatedLikedProduct = [...likedProduct];
    updatedLikedProduct[idx] = !updatedLikedProduct[idx];
    setLikedProduct(updatedLikedProduct);
  };

  return (
    <div className="containerposter">
      <div className="row row-cols-1 row-cols-md-10">
        {posters.map((poster, idx) => (
          <div key={poster.id} className="col">
            <div className="cardP">
            {/* <div className='new-label'> NEW </div> */}
              <img src={poster.image} alt={poster.type} className="cardP-img" />
              <div className="card-body">
                {/* <h6 className="card-title text-center">{poster.type}</h6> */}
                <h2 className="card-text text-center">{poster.name}</h2>
                <p className="card-text text-center">{poster.price}€</p>
                <p className="card-text text-center">{poster.description}</p>
                {/* <p className="card-text text-center">Brishante Poster de Venom </p> */}
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary btn-sm" onClick={() => handleAddToCart(poster)}>Add to cart</button>
                  <button
                    className="btn btn-link"
                    style={{
                      color: likedProduct[idx] ? 'red' : 'white',
                    }}
                    onClick={() => handleLikeClick(idx)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posters;

