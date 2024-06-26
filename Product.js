import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="btn ml-40">
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => {
            props.decrementQuantity(props.index);
          }}
        >
          -
        </button>
        <button type="button" class="btn btn-warning">
          {props.product.quantity}
        </button>
        <button
          type="button"
          class="btn btn-success"
          onclick={() => {
            props.incrementQuantity(props.index);
          }}
        >
          +
        </button>
        <div className="col-4 mr-20">
          {props.product.quantity * props.product.price}
        </div>
      </div>
    </div>
  );
}
