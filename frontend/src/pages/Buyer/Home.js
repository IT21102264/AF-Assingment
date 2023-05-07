import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ItemMapperHome } from "../../components/ItemMapperHome";
import React from "react";
import { ActionBanner } from "../../components/Banner";
import { Slider } from "../../components/Slider";
import Highlights from "../../components/Highlights";
import Map from "../../components/Map";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Features />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h2>Featured Products</h2>
        <p>Discover a wide range of products</p>
      </div>
      <ItemMapperHome />
      <Highlights />
      <Map />
      <ActionBanner />
      <Footer />
    </div>
  );
}
