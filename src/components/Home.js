import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const goToMenu = () => {
    navigate("/Menu");
  };
  return (
    <>
      <header>
        <div className="continue-shopping">
          {/* <img src="./images/food.jpg" alt="food" style={{ width: 60 }} /> */}
          <i className="fas fa-utensils" style={{ height: 70 }}></i>
          <h3>Food App</h3>
        </div>

        {/* <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div> */}
      </header>
      <button
        style={{
          width: 150,
          height: 50,
          color: "white",
          backgroundColor: "blueviolet",
          borderRadius: 50,
          marginLeft: 600,
          fontSize: 20,
        }}
        onClick={() => goToMenu()}
      >
        GO TO Menu
      </button>
    </>
  );
};

export default Home;
