import "./MainBody.css";
import Cards from "../Cards/Cards.jsx";
import Cards2 from "../Cards/Cards2";

function MainBody() {
  return (
    <div className="background-body">
      <div className="subtitle" id="new">
        News
      </div>
      <br />
      <Cards />
      <div className="subtitle" id="sold">
        ¡Top sellers!
      </div>
      <br />
      <Cards2 />

      <div id="add">
        <h2 className="subtitle"> ¡ It´s cool to be a Friki!</h2>
        <div id="friki">
          <div>
            <h5>Shipments in a maximum of 72Hrs.</h5>
            <div className="gif">
                <img className="gif" src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1694681178/aviones_corto_qua5lq.gif" alt="gif-72hrs" />
            </div>
          </div>
          <div>
            <h5>+10.000 Products</h5>
            <div className="gif">
                <img className="gif" src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1694692311/ac934e2cd79ba0e763b91b116d74f605_htbnb5.gif" alt="gif-aviones" />
            </div>
          </div>
          <div>
            <h5>Exclusive presales</h5>
            <div className="gif">
                <img className="gif" src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1694682202/200w_vjbt8z.gif" alt="Hot-Sale" />
            </div>
          </div>
          <div>
            <h5>Need to give a gift?</h5>
            <div className="content-gif">
                <img className="gif" src="https://res.cloudinary.com/dq2tfglqq/image/upload/v1694682321/giphy_ukqvba.gif" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="advenger">
        <img src="https://res.cloudinary.com/dit2zhtwz/image/upload/v1692982385/Break-wall_nxpsov.png"></img>
      </div>
    </div>
  );
}

export default MainBody;
