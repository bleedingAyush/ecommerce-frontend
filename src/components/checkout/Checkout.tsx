import React, { useEffect, useState } from "react";
import { ChevronLeft, CreditCard } from "react-feather";
import { Link } from "react-router-dom";
import CartProducts from "./CartProducts";
import Dropdown from "../Dropdown";
import "./Checkout.css";
import { images } from "./images";
import Paypal from "../../assets/svgs/paypal.svg";

const data = [
  { id: "1", size: 35, quantity: 2, price: 80.55 },
  { id: "2", size: 30, quantity: 1, price: 55.99 },
  { id: "3", size: 40, quantity: 5, price: 45.99 },
];

interface PaymentMethod {
  pay_method: string;
}

interface Card {
  cardInput?: any;
  cvv?: any;
}

const Checkout = () => {
  const [method, setMethod] = useState<PaymentMethod>({
    pay_method: "card",
  });
  const [card, setCard] = useState<Card>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    activate();
    setMethod({
      pay_method: name,
    });
  };

  const activate = () => {
    const doc = document.querySelectorAll(".radio_button_input");
    doc.forEach((item) => {
      item.classList.add("active");
    });
  };

  useEffect(() => {
    const doc = document.querySelector(".radio_button_input");
    doc?.classList.add("active");
  }, []);

  const addSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value, id }: any = e.target;
    var ele = document.getElementById(id) as HTMLFormElement;
    if (value.length === 4 || value.length === 10 || value.length === 16)
      ele.value = ele.value.replace(/[^0-9•]/gi, "").replace(/(.{4})/g, "$1  ");
    if (value.length <= 16) {
      ele.value = ele.value.replace(/[0-9]/g, "•");
    }
  };

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, maxLength, id } = e.target;
    var temp: number | string, ele;

    if (id === "cvv") {
      if (value.length > maxLength) {
        temp = value.slice(0, maxLength);
        const num = temp;
        ele = document.getElementById(id) as HTMLInputElement;
        ele.value = temp;
        setCard({ [id]: num });
      } else {
        setCard({ [id]: value });
      }
    }
    //works when function is invoked by cardNumber input
    else {
      ele = document.getElementById(id) as HTMLInputElement;
      //if user enters any invalid characters it gets replaced
      ele.value = ele.value.replace(
        /[A-Za-z}"`~_=.\->\]|<?+*/,;\[:{\\!@#\/'$%^&*()]/g,
        ""
      );
      setCard({ [id]: ele.value });
    }
  };

  const activeClass = () => {
    const doc = document.querySelector(".checkout-button") as HTMLFormElement;
    doc?.classList.add("active");
  };

  return (
    <div className="checkout">
      <div className="checkout-container">
        <h1>Shopping Cart</h1>
        <div className="line"></div>
        <div className="cart-container">
          <div className="cart-products">
            <span className="expand center-between">Product</span>
            <span>Size</span>
            <span>Quantity</span>
            <span>Total Price</span>
            {data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <CartProducts image={images[0]} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="down-line"></div>
        <div className="down-container">
          <Link to="/" className="go-back">
            <ChevronLeft size={18} strokeWidth={2.3} />
            <h4>Continue Shopping</h4>
          </Link>
          <div className="price-container">
            <span className="title">Subtotal</span>
            <span className="total-info" style={{ fontWeight: "500" }}>
              $593.93
            </span>
            <span className="title">Shipping</span>
            <span className="total-info" style={{ fontWeight: "500" }}>
              Free
            </span>
            <div className="price-line"></div>
            <span className="total">Total:</span>
            <span className="total-info total-price">$593.93</span>
          </div>
        </div>
      </div>
      <div className="payment-container">
        <h2>Payment Info.</h2>
        <div className="payment-method">
          <span className="subtitle">Payment Method:</span>
          <div className="flex-container half-gap">
            <div className="toggle-wrapper">
              <input
                type="radio"
                className="radio_button_input"
                id="card_radio"
                name="card"
                checked={method?.pay_method == "card"}
                onChange={handleChange}
              />
              <span className="circle"></span>
            </div>
            <CreditCard size={"18px"} />
            <span className="text">Credit Card</span>
          </div>
          <div className="flex-container">
            <div className="toggle-wrapper">
              <input
                type="radio"
                className="radio_button_input"
                id="paypal_radio"
                name="paypal"
                checked={method?.pay_method == "paypal"}
                onChange={handleChange}
              />
              <span className="circle"></span>
            </div>
            <img src={Paypal} alt="paypalicon" width={"17px"} />
            <span className="radio-button-label text">Paypal</span>
          </div>
        </div>
        <div className="card-name">
          <span className="subtitle">Name On Card:</span>
          <span className="half-gap text">John Carter</span>
        </div>
        <div className="card-number">
          <span className="subtitle">Card Number</span>
          <input
            className="half-gap card-input"
            type="tel"
            id="cardInput"
            spellCheck="false"
            value={card?.cardInput}
            maxLength={22}
            placeholder="••••  ••••  ••••  1234"
            onKeyPress={addSpace}
            onPaste={(e) => e.preventDefault()}
            onChange={validateInput}
          />
        </div>
        <div className="expire">
          <span className="subtitle">Expiration Date:</span>
          <div className="expire-container">
            <Dropdown
              initialValue={"05"}
              value={["01", "02", "03", "04"]}
              styles={{
                width: "70px",
                padding: "0px",
                backgroundColor: "transparent",
              }}
            />
            <Dropdown
              initialValue={"2020"}
              value={["1999", "2000", "2001", "2002"]}
              styles={{ width: "93px", backgroundColor: "transparent" }}
            />
            <div className="cvv-container">
              <span className="subtitle">CVV:</span>
              <input
                type="tel"
                className="cvv-input"
                id="cvvInput"
                placeholder="000"
                maxLength={3}
              />
            </div>
          </div>
        </div>
        <button className="checkout-button" onFocus={activeClass}>
          <span className="checkout-text">Check Out</span>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
