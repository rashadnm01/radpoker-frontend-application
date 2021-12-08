import React from "react";
import { useParams } from "react-router-dom";
export default function Contest(props) {
  const params = useParams();
  let counter = 0;
  if (props.data.contests) {
    const accounts = props.data.accounts;
    accounts
      .filter((account) => account.contest_id === props.data.contests.id)
      .map((account) => {
        counter += 1;
      });
    const id = params.id;
    const contest = props.data.contests.find((p) => p._id === id);
    return (
      <div className="contestDisplay">
        <table className="contestTable">
          <tr>
            <th>Name</th>
            <td>{contest.name}</td>
          </tr>
          <tr>
            <th>ID</th>
            <td>{contest.id}</td>
          </tr>
          <tr>
            <th># of Accounts</th>
            <td>{counter}</td>
          </tr>
        </table>
      </div>
    );
  } else {
    return <h1>Loading data...</h1>;
  }
}
