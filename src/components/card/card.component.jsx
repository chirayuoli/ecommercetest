import React from "react";
import "./card.style.css";

const Card = ({ title }) => (
  <div className="card-container">
    <h2>{title}</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores harum
      aliquam animi, maiores omnis aperiam, velit, accusamus distinctio in nobis
      voluptas architecto reprehenderit natus eos. Reiciendis in explicabo
      voluptatibus praesentium.
    </p>
  </div>
);

export default Card;
