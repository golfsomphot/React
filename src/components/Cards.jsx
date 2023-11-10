import React from "react";
 
const Cards = ({url,title,content}) => {
  return (
<div className="card" style={{ width: '18rem' }}>
  <img src={url} className="card-img-top" alt="..." />
  <div className="card-body" />
  <h5 className="card-title">{title}</h5>
  <p className="card-text">
    {content}
  </p>
  <a href="login" className="btn btn-primary">
    Go somewheresde
  </a>
</div>
  );
};

export default Cards;
