import Filter from "./Filter";
import Search from "./Search";
import Shimer from "./Shimer";
import Rescard, { PromotedComp} from "./Rescard";
import { useEffect, useState } from "react";
import Header from "./Header";
import { CDN_URL } from "../../Utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const res = await fetch(CDN_URL);

    const response = await res.json();

    const restaurentData =
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurentList(restaurentData);
    setFilteredRes(restaurentData);
    console.log("ressss", restaurentData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterRestaurant = () => {
    const filteredList = restaurentList.filter(
      (item) => item.info.avgRating == 4
    );
    setFilteredRes(filteredList);
    // console.log('filteredddd',restaurentList)
  };

  const handleSearch = restaurentList?.filter((item) =>
    item.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleOnchange = (e) => {
    setSearchText(e.target.value);
    setFilteredRes(handleSearch);
  };

  const Promotedcomp = PromotedComp(Rescard);

  return (
    <>
      <div className="mt-2 my-3 flex gap-5 ml-2">
        <Filter
          btnText="Top Rated Restaurant"
          filterRestaurant={filterRestaurant}
        />
        <button
          onClick={() => setFilteredRes(restaurentList)}
          className="bg-orange-500 text-white  font-bold p-2 rounded-lg"
        >
          Reset Filter
        </button>
        <Search onChange={handleOnchange} value={searchText} />
      </div>
       
      {filteredRes.length == 0 ? (
        <Shimer />
      ) : (
        <div className="flex p-2 gap-2 bg-amber-50  w-full">
          {filteredRes?.map((item) => (
            <Link to={"/restaurent/" + item?.info?.id}>
            {item?.info?.name=='Pizza Hut'?<Promotedcomp  key={item?.info?.id} resData={item} />:<Rescard key={item?.info?.id} resData={item} />}  
            </Link>

           
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
