import React, { useState } from "react";
import ItemList from "./ItemList";

const ResmenuList = ({ data }) => {
  const [showList, setShowList] = useState(false);

  const cardData = data?.card?.card;
  return (
    <div className="flex flex-col items-center justify-center">
      <span
        onClick={() => setShowList(!showList)}
        className="bg-gray-100 p-3 m-1 w-6/12 rounded-lg cursor-pointer "
      >
        <span className="justify-between flex">
          <p className="font-bold">
            {cardData?.title}({cardData?.itemCards?.length})
          </p>
          {!showList ? (
            <p className="font-extrabold">↓</p>
          ) : (
            <p className="font-extrabold">↑</p>
          )}
        </span>
        {showList && <ItemList listData={cardData?.itemCards} />}
      </span>
    </div>
  );
};

export default ResmenuList;
