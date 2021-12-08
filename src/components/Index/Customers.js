import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Customers(props) {
  if (props.data) {
    return (
      <div className="customers">
        <h1>Customers</h1>
        {props.data.map((customer) => {
          return (
            <Link to={`${customer._id}`}>
              <div key={customer._id} className="customer">
                {customer.first_name + " " + customer.last_name}
              </div>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return <h1>Loading data...</h1>;
  }
}
