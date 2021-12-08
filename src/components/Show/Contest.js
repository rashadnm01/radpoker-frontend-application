import React from "react";
import { useParams } from "react-router-dom";
export default function Contest(props) {
  const params = useParams();
  const id = params.id;
  const contest = props.data.find((p) => p._id === id);
  if (props.data) {
    return (
      <div className="contestDisplay">
        <h1>
          {contest.name} : #{contest.id}
        </h1>
      </div>
    );
  } else {
    return <h1>Loading data...</h1>;
  }
}
