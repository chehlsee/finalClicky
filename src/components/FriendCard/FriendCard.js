import React from "react";

import "./FriendCard.css";

// set props for FriendCard
const FriendCard = props => (

    <div className="card" onClick={props.userClick}>
      <div className="image-container">
        <img className="img-thumbnail img-responsive"
          alt={props.name}
          src={props.image}
          onclick={() => props.clickPicture(props.id)}
        />
      </div>
    </div>
);

export default FriendCard;
