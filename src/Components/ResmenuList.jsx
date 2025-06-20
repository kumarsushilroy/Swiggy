import React, { useState } from "react";
import ItemList from "./ItemList";

const ResmenuList = ({ data }) => {

const [showList, setShowList] = useState(false);

 const handleClick = ()=>{
    setShowList(!showList);
 }
  const cardData = data?.card?.card;
  return (
    // <div className="flex flex-col items-center justify-center">
        <div className="w-6/12 p-2 ">
      <span
        onClick={handleClick}
        className="cursor-pointer "
      >
        <span className="justify-between flex bg-gray-50 p-3 rounded-lg w-full">
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
