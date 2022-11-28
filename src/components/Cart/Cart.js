import React, { useEffect } from "react";
import "../../App.css";
import SummaryCard from "../SummaryCard/SummaryCard";
import clearCartImage from "../../images/empty-cart.svg";
import crossImage from "../../images/cross3.svg";
import { useSelector } from "react-redux";
import {
  store,
  remove,
  emptyCart,
  selectProducts,
  selectTotalItems,
  setTotalItems,
  selectTotalAmount,
  setTotalAmount,
  incrementProduct,
  decrementProduct,
} from "../../store";

function Cart() {
  let totalItems = useSelector(selectTotalItems);
  let totalAmount = useSelector(selectTotalAmount);

  const products = useSelector(selectProducts);
  const cartProducts = products.filter((product) => product.added);

  store.dispatch(setTotalItems(cartProducts.length));

  //calculating total amount of cart items
  let sum = cartProducts
    .map((product) => {
      let price = product.price;
      let quantity = product.quantity;
      let total = price * quantity;
      return total;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  useEffect(() => {
    store.dispatch(setTotalAmount(Number(sum).toFixed(2)));
  }, [sum]);

  return (
    <div>
      <SummaryCard items={totalItems} amount={totalAmount} />
      {}
      {cartProducts.length > 0 && (
        <div>
          {" "}
          <button
            className="clear-cart-button"
            onClick={() => store.dispatch(emptyCart(products))}
          >
            <img
              className="clear-cart-image"
              src={clearCartImage}
              alt="Empty Cart"
              title="Empty Cart"
            />{" "}
          </button>
          <h3 className="your-products">Your Products</h3>
        </div>
      )}

      {}
      <div className="cart-container">
        {products
          .filter((product) => product.added)
          .map((product) => {
        
            let id = product.id;
            let title = product.title;
            let imageUrl = product.imageUrl;
            let price = product.price;
            let quantity = product.quantity;

   
            if (quantity > 0) {
              return (
                <div key={id} className="cart-products">
                  <h3 className="cart-shoe-name">{title} </h3>
                  <button
                    className="remove-btn hvr-grow"
                    onClick={() => store.dispatch(remove(product))}
                  >
                    {" "}
                    <img
                      src={crossImage}
                      height={30}
                      alt="Remove"
                      title="Remove"
                    />{" "}
                  </button>
                  <br />
                  <h2 className="shoe-price-cart"> ${price} </h2>
                  <label htmlFor="quantity">Items</label>{" "}
                  <button
                    className="item-button"
                    onClick={() => store.dispatch(decrementProduct(product))}
                  >
                    -
                  </button>
                  <input
                    readOnly
                    className="quantity"
                    maxLength="3"
                    type="text"
                    id="quantity"
                    value={quantity}
                  />
                  <button
                    className="item-button"
                    onClick={() => store.dispatch(incrementProduct(product))}
                  >
                    +
                  </button>
                  <br />
                  <img className="cart-shoe-image" alt={title} src={imageUrl} />
                  <br />
                </div>
              );
            } else {
              store.dispatch(remove(product));
              return null;
            }
          })}
      </div>
    </div>
  );
}

export default Cart;
