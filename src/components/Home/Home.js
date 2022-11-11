import React from "react";
import Shoes from "../../latestShoes.json";

function Home() {
  return (
    <div>
      <div>
        <span className="tagline">WELCOME!</span>
        <div className="tagline-para">
          The SwooshStore is a brand new online shoe store that has all the hottest releases that you are looking for!
        </div>

        <br />
        <br />
        <br />
        <div className="latest-container">
          <hr className="line" /> &nbsp; &nbsp;
          <span className="latest-designs">Coming Soon</span>&nbsp;&nbsp;
          <hr className="line" />
          <br />
          <br />
          <div className="product-container image-gallery">
            {Object.keys(Shoes).map((keyName) => {
              const shoe = Shoes[keyName];
              return (
                <div className="home-products" key={keyName}>
                  <img
                    className="products-shoe-image"
                    alt={shoe.name}
                    src={shoe.img}
                  />
                  <h3 className="shoe-name">{shoe.name}</h3>
                  <h3 className="shoe-price">${shoe.price}</h3>
                  <h3 className="shoe-description">{shoe.description}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
