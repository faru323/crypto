import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Cards = () => {


    let navigate = useNavigate();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins").then((res) => setCards(res.data));
  }, []);
 
  return (
    <div className="salam ">
   
      {cards.map((card) => {
        return (
          <div className="cards ">
            <div className="cardDiv lgShadow " >
              <div className="">
                <img src={card.image.large} alt="images" />
              </div>
              <h3 id="Name"> {card.name}</h3>
              <p className="detail">
                <b>Rank:</b> <span id="rank">{card.market_data.market_cap_rank}</span>
              </p>
              <p className="detail">
                <b>Price:</b> <span id="price">{card.market_data.current_price.usd}$</span>
              </p>
              <p className="detail">
              <b>Price Change:</b> <span>{card.market_data.market_cap.usd}</span>
            </p>
              <p className="detail">
                <b>Market Cap:</b> <span>{card.market_data.market_cap.usd}</span>
              </p>
              <button id="Fav">Add Favourite</button>
           
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;