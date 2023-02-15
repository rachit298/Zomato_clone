import React from "react";
import "./DeliveryCollections.css";
import { nanoid } from "nanoid";
import NextArrow from "../../Common /Carousal/NextArrow";
import PrevArrow from "../../Common /Carousal/PrevArrow";
import Slider from "react-slick";

const deliveryItems = [
  {
    id: nanoid(),
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: nanoid(),
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
  },
  {
    id: nanoid(),
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png",
  },
  {
    id: nanoid(),
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
  },
  {
    id: nanoid(),
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
  },
  {
    id: nanoid(),
    title: "Chaat",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
  },
  {
    id: nanoid(),
    title: "Momos",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
  },
  {
    id: nanoid(),
    title: "Paneer",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
  },
  {
    id: nanoid(),
    title: "Samosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
  },
  {
    id: nanoid(),
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/dish_images/49a62bf16f88e7d22994e387626292161632717505.png",
  },
  {
    id: nanoid(),
    title: "Pastry",
    cover:
      "https://b.zmtcdn.com/data/homepage_dish_data/4/f06d9a57b0847677e36f163a7b7fe54a.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function DeliveryCollections() {
  return (
    <div className="delivery-collection">
      <div className="max-width delivery-collection-container">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return (
              <div>
                <div className="delivery-item-cover">
                  <img
                    className="delivery-item-image"
                    src={item.cover}
                    alt="item-image"
                  />
                </div>
                <div className="delivery-item-title">{item.title}</div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default DeliveryCollections;
