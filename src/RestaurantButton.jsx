import React from "react";

function RestaurantButton(props) {
  return (
    <div>
      {" "}
      <button onClick={props.order1} className="btn btn-primary">
        Add
      </button>
    </div>
  );
}

export default RestaurantButton;
