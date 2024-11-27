import React from "react";
import { ListingInfo } from "../../utils/Types";
import { ListingCard } from "../ListingCard";
import "./index.css";

const List = ({ data }: { data?: ListingInfo[] }) => {
  return (
    <div className="list">
      {data?.map(info => (
        <ListingCard info={info} />
      ))}
    </div>
  );
};

export default List;
