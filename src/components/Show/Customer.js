import React from "react";
import { useParams } from "react-router-dom";
export default function Customer(props) {
  const params = useParams();
  const id = params.id;
  const customer = props.data.find((p) => p._id === id);
  if (props.data) {
    return (
      <div className="customerDisplay">
        <h1>
          {customer.first_name} {customer.last_name} : #{customer.id}
        </h1>
        <p>E-mail: {customer.email}</p>
        <p>Active: {customer.active}</p>
        <p>Account Manager ID: {customer.account_manager_id}</p>
        <p>
          Reason For Joining: <br />
          {customer.reason_for_joining}
        </p>
        <p>Created Date: {customer.created_date}</p>
      </div>
    );
  } else {
    return <h1>Loading data...</h1>;
  }
}
