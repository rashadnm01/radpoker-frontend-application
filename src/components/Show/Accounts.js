import React from "react";

export default function Accounts(props) {
  if (props.accounts) {
    const accounts = props.accounts;
    //check data
    console.log(accounts);
    //get matching account data
    return (
      <>
        {accounts
          .filter((account) => account.customer_id === props.customer.id)
          .map((account) => {
            console.log("accounts" + account);
            return (
              <table className="customerAccounts">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Contest ID</th>
                    <th>Address</th>
                    <th>City, State</th>
                    <th>Zip Code</th>
                    <th>Rating</th>
                    <th>Date Created</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{account.id}</td>
                    <td>{account.contest_id}</td>
                    <td>{account.address}</td>
                    <td>{account.city + ", " + account.state}</td>
                    <td>{account.zip_code}</td>
                    <td>{account.rating}</td>
                    <td>{account.created_date}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
      </>
    );
  } else {
    return <h1>No accounts found...</h1>;
  }
}
