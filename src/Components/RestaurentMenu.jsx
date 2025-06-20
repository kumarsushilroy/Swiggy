import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Shimer from "./Shimer";
import ResmenuList from "./ResmenuList";

const RestaurentMenu = () => {
  const [resMenuData, setResmenuData] = useState(null);

 const params = useParams();
 const {resId} = params
 

  const fetchResMenu = async () => {
    let menuData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    );
    menuData = await menuData.json();

    setResmenuData(menuData?.data);

    console.log("RESmenuuu", resMenuData);
  };

   useEffect(() => {
    fetchResMenu();
  }, []);

  if(!resMenuData) return <Shimer/>

 const resData = resMenuData?.cards[2]?.card?.card?.info ;
 console.log('RESDatatt', resData)
//  const itemCategories = resMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.['@type']
    const itemCategories = resMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item?.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 console.log('itemCaree', itemCategories)

  return (
    <div className="h-screen ">
      <h1 className="text-2xl text-gray-500 my-5">Restraunts Menu</h1>
       
      
      <div className=" ">
        <span className="text-2xl text-center">{resData?.name}, {resData?.city}</span>
        {itemCategories?.map(item=><ResmenuList key={item?.card?.card?.categoryId} data={item} />)}
      </div>
    </div>
  );
};

export default RestaurentMenu;
