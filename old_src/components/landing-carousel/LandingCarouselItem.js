import React from "react";

const LandingCarouselItem = props => {
  let footer = props.footer.map(item => (
    <button key={item._key} className="btn btn-info pl-5 pr-5 mt-4 mr-2">
      {item.label}
    </button>
  ));

  return (
    <div className={`carousel-item ${props.active}`}>
      <img
        className="d-block w-100"
        src={props.img}
        alt={props.title}
        style={{ maxHeight: "70vh", objectFit: "cover" }}
      />
      <div
        className="carousel-caption d-none d-md-block"
        style={{ textShadow: "1px 1px 8px #000000cc" }}
      >
        <h1 className="text-uppercase">{props.title}</h1>
        <p>{props.body}</p>
        {footer}
      </div>
    </div>
  );
};

export default LandingCarouselItem;
