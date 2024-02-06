import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../figures/figures.css';

const Figures = ({ addToCart }) => {
  const [figures, setFigures] = useState([]);
  const [likedProduct, setLikedProduct] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener los productos de la categoría "Figura" desde tu API.
    axios.get('https://localhost:7106/Product/GetProductsByCategoryId?categoryId=4')
      .then((response) => {
        setFigures(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener Figuras:', error);
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
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {figures.map((figure, idx) => (
          <div key={figure.id} className="col">
            <div className="cardf m-3">
              <img src={figure.image} alt={figure.type} className="cardf-img" />
              <div className="card-body">
                <h5 className="card-title text-center">{figure.type}</h5>
                <p className="card-text text-center">{figure.name}</p>
                <p className="card-text text-center"> {figure.price}€</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary btn-sm" onClick={() => handleAddToCart(figure)}>Add to cart</button>
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

export default Figures;
