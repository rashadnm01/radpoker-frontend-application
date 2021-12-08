import React from "react";
import Accounts from "./Accounts";
import { useParams } from "react-router-dom";
export default function Customer(props) {
  const params = useParams();

  if (props.data.customers && props.data.accounts) {
    const id = params.id;
    const customer = props.data.customers.find((p) => p._id === id);

    return (
      <div className="customerDisplay">
        <h1>Customer Info</h1>
        <table className="customerInfo">
          <tr>
            <th colSpan="2">
              {customer.first_name} {customer.last_name} #{customer.id}
            </th>
          </tr>
          <tr>
            <th>E-mail</th>
            <td>{customer.email}</td>
          </tr>
          <tr>
            <th>Active</th>
            <td>{customer.active}</td>
          </tr>
          <tr>
            <th>Account Manager ID</th>
            <td>{customer.account_manager_id}</td>
          </tr>
          <tr>
            <th>Reason For Joining</th>
            <td>{customer.reason_for_joining}</td>
          </tr>
          <tr>
            <th>Date Created</th>
            <td>{customer.created_date}</td>
          </tr>
        </table>
        <h1>Accounts</h1>
        <Accounts customer={customer} accounts={props.data.accounts} />
      </div>
    );
  } else {
    return <h1>Loading data...</h1>;
  }
}
