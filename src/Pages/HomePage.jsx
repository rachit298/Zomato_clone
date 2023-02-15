import { nanoid } from "nanoid";
import React, { useState } from "react";
import Footer from "../Components/Common /Footer/Footer";
import Header from "../Components/Common /Header/Header";
import TabOptions from "../Components/Common /TabOptions/TabOptions";
import Delivery from "../Components/Delivery/Delivery";
import Dining from "../Components/DiningOut/Dining";
import Nightlife from "../Components/Nightlife/Nightlife";

function HomePage() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions
        key={nanoid()}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {selectTab(activeTab)}
      <Footer />
    </div>
  );
}

function selectTab(tab) {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining out":
      return <Dining />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
}

export default HomePage;
