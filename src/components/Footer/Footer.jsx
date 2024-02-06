import './footer.css';

function Footer() {
  return (
    <div className="footer">
    <div className="footer-container">
      <div className="column">
        <h6>Contacto</h6>
        <p data-testid="phone-number">924 00 00 06 - Prado / Pedidos Web</p>
        <p data-testid="phone-number">612 612 356 - Calle Mérida</p>
        <p>tienda@mundofriki.es</p>
      </div>
      <div className="column">
        <h6>Redes Sociales</h6>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="column">
        <h6>Información</h6>
        <ul>
          <li>Quiénes somos</li>
          <li>Condiciones de uso</li>
          <li>Política de Cookies</li>
          <li>Empleo</li>
        </ul>
      </div>
      <div className="styled-footer">
        <p>&copy; 2023 Multiverse</p>
      </div>
    </div>
    </div>
  );
}

export default Footer;