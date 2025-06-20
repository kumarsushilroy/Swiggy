import React, { useState } from "react";

function ItemList({ listData }) {
  console.log("listdata", listData);

  return (
    <div>
      {listData?.map((item) => (
        <span className=" flex bg-white justify-between items-center mt-2">
          <span className="flex flex-col border-b-2">
            <p>{item.card.info.name}</p>
            <p>Price: {item.card.info.price / 10}</p>
            <p>{item.card.info.description}</p>
          </span>
          <span className="w-52 h-24 border">
            <img
              className="w-full object-cover"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                item?.card?.info?.imageId
              }
              alt=""
            />
          </span>
        </span>
      ))}
    </div>
  );
}

export default ItemList;
