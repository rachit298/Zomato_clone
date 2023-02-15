import React from "react";
import "./Nightlife.css";
import { nightLife } from "../../data/Nightlife.js";
import { nanoid } from "nanoid";
import Collection from "../Common /Collections/Collection";
import Filter from "../Common /Filter/Filter";
import Explore from "../Common /Explore/Explore";

const nightlifeList = nightLife;

const nightlifeFilters = [
  {
    id: nanoid(),
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: nanoid(),
    title: "Pro Offers",
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: nanoid(),
    title: "Distance",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: nanoid(),
    title: "Rating: 4.0+",
  },
  {
    id: nanoid(),
    title: "Pubs & Bars",
  },
];

const collectionList = [
  {
    id: nanoid(),
    title: "Microbreweries",
    cover:
      "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
    places: "29 Places",
  },
  {
    id: nanoid(),
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "22 Places",
  },
  {
    id: nanoid(),
    title: "Artisan Cocktails",
    cover:
      "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
    places: "20 Places",
  },
  {
    id: nanoid(),
    title: "Happy Hours",
    cover:
      "https://b.zmtcdn.com/data/collections/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg",
    places: "12 Places",
  },
  {
    id: nanoid(),
    title: "Beer in a Bar",
    cover:
      "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg",
    places: "5 Places",
  },
  {
    id: nanoid(),
    title: "Bar-gain",
    cover:
      "https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg",
    places: "9 Places",
  },
];

function Nightlife() {
  return (
    <div>
      <Collection key={nanoid()} list={collectionList} />
      <div className="max-width">
        <Filter key={nanoid()} filterList={nightlifeFilters} />
      </div>
      <Explore
        list={nightlifeList}
        collectionName="Nightlife Restaurants in Jaipur"
      />
    </div>
  );
}

export default Nightlife;
