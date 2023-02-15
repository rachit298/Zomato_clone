import { nanoid } from "nanoid";
import React from "react";
import Collection from "../Common /Collections/Collection";
import "./Dining.css";
import { dining } from "../../data/Dining.js";
import Filter from "../Common /Filter/Filter";
import Explore from "../Common /Explore/Explore";

const collectionList = [
  {
    id: nanoid(),
    title: "Newly Opened",
    cover:
      "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015789.jpg",
    places: "12 Places",
  },
  {
    id: nanoid(),
    title: "Veggie Friendly",
    cover:
      "https://b.zmtcdn.com/data/collections/5d13e5bef6e5a44cfb7ea19fb915a9ba_1616407816.jpg",
    places: "23 Places",
  },
  {
    id: nanoid(),
    title: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/83fed288b6d32c932b7d3a0034c4f947_1625650348.png",
    places: "30 Places",
  },
  {
    id: nanoid(),
    title: "Best of Jaipur",
    cover:
      "https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg",
    places: "116 Places",
  },
  {
    id: nanoid(),
    title: "Outdoor Seating",
    cover:
      "https://b.zmtcdn.com/data/collections/b1d388518012c80696487c08ca08e325_1582201041.jpg",
    places: "24 Places",
  },
  {
    id: nanoid(),
    title: "Brilliant Biryanis",
    cover:
      "https://b.zmtcdn.com/data/collections/81dc179878a8d9e8b2ab03e4eaeab0df_1459434256.jpg",
    places: "16 Places",
  },
  {
    id: nanoid(),
    title: "Best Pizza Places In Town",
    cover:
      "https://b.zmtcdn.com/data/collections/6398cf5475ba51e532003912a8151436_1616403332.jpg",
    places: "22 Places",
  },
];

const diningFilters = [
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

const diningList = dining;

function Dining() {
  return (
    <div>
      <Collection key={nanoid()} list={collectionList} />
      <div className="max-width">
        <Filter key={nanoid()} filterList={diningFilters} />
      </div>
      <Explore
        list={diningList}
        collectionName="Best Dining Restaurants in Jaipur"
      />
    </div>
  );
}

export default Dining;
