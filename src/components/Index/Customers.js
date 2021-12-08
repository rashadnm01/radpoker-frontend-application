import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Customers(props) {
  const params = useParams();
  console.log(params);
  if (props.data.customers) {
    return (
      <div className="customers">
        <h1>Customers</h1>
        {props.data.customers.map((customer) => {
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
