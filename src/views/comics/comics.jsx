import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../comics/comics.css';

const Comics = ({ addToCart, cart }) => {
  const [comics, setComics] = useState([]);
  const [likedProduct, setLikedProduct] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener los productos de la categoría "Cómic" desde tu API.
    axios.get('https://localhost:7106/Product/GetProductsByCategoryId?categoryId=3')
      .then((response) => {
        setComics(response.data);
        // Inicializa likedProduct con un arreglo del mismo tamaño que comics
        setLikedProduct(new Array(response.data.length).fill(false));
      })
      .catch((error) => {
        console.error('Error al obtener Cómics:', error);
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
        {comics.map((comic, idx) => (
          <div key={comic.id} className="col">
            <div className="card1 m-3">
              <img src={comic.image} alt={comic.type} className="card1-img-center" />
              <div className="card-body">
                <h5 className="card1-title text-center">{comic.type}</h5>
                <p className="card1-text text-center"> {comic.name}</p>
                <p className="card1-text text-center"> {comic.description}</p>
                <p className="card1-text text-center"> {comic.price}€</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary btn-sm" onClick={() => handleAddToCart(comic)}>Add to Cart</button>
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

export default Comics;

