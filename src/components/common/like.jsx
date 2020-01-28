import React from "react";

const Like = ({ liked, onLikeToggle }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onLikeToggle}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};

export default Like;
