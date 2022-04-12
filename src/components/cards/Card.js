import React from "react";
import "./card.css";
import What from "../../assets/collaborate1.png";
function Card(props) {
  return (
    <>
      <div className="card">
        <div className="image">
          {/* "https://th.bing.com/th/id/OIP.YRXVJb9uDspJlnhTjxdArAHaHa?pid=ImgDet&rs=1" */}
          <img className={"card-img"} src={props.image}></img>
        </div>
        <div className="text">
          <div className="heading">{props.heading}</div>
          <div className="body">
            {/* normal : It is the normal font-weight.  It is the same as 400, the default numeric-value for boldness.
bold : It is the bold font-weight. It is the same as 700.
bolder : It sets the font-weight bolder than the  */}
            {props.body}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
