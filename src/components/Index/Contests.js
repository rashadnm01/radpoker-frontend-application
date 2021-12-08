import React from "react";
import { Link } from "react-router-dom";

export default function Customers(props) {
  if (props.data.contests) {
    return (
      <div className="contests">
        <h1>Contests</h1>
        {props.data.contests.map((contest) => {
          return (
            <Link to={`${contest._id}`}>
              <div key={contest._id} className="contest">
                {contest.name}
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
