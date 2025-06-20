

import { useParams } from "react-router-dom";
import Shimer from "./Shimer";
import ResmenuList from "./ResmenuList";
import usecallApi from "../../Utils/hooks/usecallApi";
import { useState } from "react";

const RestaurentMenu = () => {
  const params = useParams();
  const { resId } = params;
  const [showIndex , setShowIndex] = useState(1)
  const [showList , setShowList] = useState(false);

  const resMenuData = usecallApi(resId);
  console.log("RESMENu==", resMenuData);

  if (!resMenuData) return <Shimer />;

  const resData = resMenuData?.cards[2]?.card?.card?.info;
  const itemCategories =
    resMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-full">
      <div className="flex flex-col items-center p-5">
        <span className="text-2xl text-center flex flex-col">
          <img
            className="w-96 object-cover h-40 rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              resData?.cloudinaryImageId
            }
            alt=""
          />
          <p className="font-bold">
            {resData?.name}, {resData?.city}
          </p>
        </span>
        {itemCategories?.map((item, index) => (
          <ResmenuList key={item?.card?.card?.categoryId} data={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
