import React from "react";
import "./Card.css";

function Card({ restaurent }) {
  const name = restaurent?.info?.name ?? "";
  const coverImg = restaurent?.info?.image?.url;
  const deliveryTime = restaurent?.order?.deliveryTime || restaurent?.distance;
  const rating = restaurent?.info?.rating?.rating_text;
  const approxPrice = restaurent?.info?.cfo?.text;
  const offers = restaurent?.bulkOffers ?? [];
  const cuisines = restaurent?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurent?.bottomContainers;
  const goldOff = restaurent?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className="pro-off">{proOff}</div>}
        {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating}
            <i className="fi fi-rr-star absolute-center res-rating-icon"></i>
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, index) => (
              <span className="res-cuisine-tag">
                {item}
                {index !== cuisines.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}
        {approxPrice && <div className="res-approx-price">{approxPrice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
            <img
              src={bottomContainers[1]?.image?.url}
              alt={bottomContainers[1]?.text}
              style={{ height: "18px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
