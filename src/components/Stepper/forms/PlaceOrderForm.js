import React, { useContext } from "react";
import { ShippingContext } from "../../../CartContext";
import Button from "@material-ui/core/Button";
import { Formik, Form } from "formik";
import "../../../App.css";
import { useSelector } from "react-redux";
import { selectTotalAmount, selectProducts } from "../../../store";
import { CartContext } from "../../../CartContext";
import { setTotalItems, store, emptyCart } from "../../../store";

const PlaceOrderForm = ({ handleNext }) => {
  const products = useSelector(selectProducts);
  const cartProducts = products.filter((product) => product.added);
  const [cart, setCart] = useContext(CartContext);

  let totalAmount = useSelector(selectTotalAmount);

  const [ShippingState, setShippingState] = useContext(ShippingContext);

  const {
    first_name,
    last_name,
    address,
    city,
    state,
    country,
    zip_code,
  } = ShippingState;

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => {
         setTimeout(() => {
              setCart([]);

          store.dispatch(emptyCart(products));
          store.dispatch(setTotalItems(0));
          handleNext();
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <div className="place-order-parent">
          <div className="place-order-container">
            <h1>Order Summary</h1>
            <br />


            {cartProducts.map((product, index) => {
   
              let id = product.id;
              let name = product.title;
              let price = product.price;
              let quantity = product.quantity;

              return (
                <div key={id} className="items-container">
                  <p className="left">
                    {index + 1}.&nbsp; {name}(
                    <span className="item-quantity">{quantity}</span>)
                  </p>

                  <p className="right">
                    <strong>${price}</strong>
                  </p>
                  <br />
                  <br />
                </div>
              );
            })}

            <>
              <br />
              <br />
              <p className="left">Delivery</p>

              <p className="right">
                <strong>Free</strong>
              </p>
              <br />
              <br />
            </>


            <>
              <p className="left">Total</p>

              <p className="right">
                <strong>${totalAmount}</strong>
              </p>
              <br />
              <br />
            </>


            <div className="shipping-container">
              <h2>( Shipping Details )</h2>
              <br />
              <p>
                {first_name} {last_name}
              </p>
              <br />
              <p>
                {address}, {city}, {state}, {zip_code}, {country}{" "}
              </p>
              <br />
              <p>Payment: "Cash On Delivery"</p>
              <br />
            </div>


            <br />
            <Form autoComplete="off">
              <Button
                variant="contained"
                className="checkout-btn"
                type="submit"
                color="primary"
              >
                Place Order
              </Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default PlaceOrderForm;
