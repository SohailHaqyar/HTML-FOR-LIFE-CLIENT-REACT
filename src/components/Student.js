import React from "react";

export const Student = (props) => {
  return (
    <div className="student">
      <img src={props.avatar} width="200" height="200" />
      <div className="content">
        <h2>{props.full_name}</h2>
        {/* <p>{props.email}</p> */}
        <p>{props.bio}</p>
      </div>
    </div>
  );
};
