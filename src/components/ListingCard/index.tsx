import React from "react";
import Address from "../Address";
import Agent from "../Agent";
import Gallery from "../Gallery";
import { ListingInfo } from "../../utils/Types";
import "./index.css";
import Features from "../Features";
import Price from "../Header";
import Separator from "../Separator";
import Header from "../Header";

export const ListingCard = (props: { info: ListingInfo }) => {
  const { info } = props;

  return (
    <div className="listing-card">
      <Gallery photos={info.photos} />
      <div className="listing-details">
        <Header price={info.price} isFavorite={info.isFavorite} />

        <Features bedrooms={info.bedrooms} bathrooms={info.bathrooms} />

        <Address address={info.address} city={info.city} state={info.state} zipCode={info.zipCode} />
        <Separator height="1rem" />
        <Agent
          avatar={info.agent?.avatar}
          firstName={info.agent?.firstName}
          lastName={info.agent?.lastName}
        />
      </div>
    </div>
  );
};
