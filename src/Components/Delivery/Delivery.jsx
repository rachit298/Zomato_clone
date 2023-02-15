import { nanoid } from "nanoid";
import React from "react";
import { restaurents } from "../../data/Restaurents";
import Filter from "../Common /Filter/Filter";
import "./Delivery.css";
import DeliveryCollections from "./DeliveryCollections/DeliveryCollections";
import Explore from "../Common /Explore/Explore";
import TopBrands from "./TopBrands/TopBrands";

const deliveryFilters = [
  {
    id: nanoid(),
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: nanoid(),
    title: "Rating: 4.0+",
  },
  {
    id: nanoid(),
    title: "Safe and Hygienic",
  },
  {
    id: nanoid(),
    title: "Pure Veg",
  },
  {
    id: nanoid(),
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: nanoid(),
    title: "Great Offers",
  },
];

const restaurentList = restaurents;

function Delivery() {
  return (
    <div>
      <div className="max-width">
        <Filter key={nanoid()} filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <Explore
        list={restaurentList}
        collectionName="Delivery Restaurents in Jaipur"
      />
    </div>
  );
}

export default Delivery;
