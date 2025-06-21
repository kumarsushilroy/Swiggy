import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Store/cartSlice";
import { ToastContainer, toast } from "react-toastify";

function ItemList({ listData }) {
  const dispatch = useDispatch();

  const addCartItem = (item) => {
    const cardInfo = item.card.info;
    dispatch(addItem(cardInfo));
    toast.success("item added to cart");
  };

  return (
    <div>
      {listData?.map((item) => (
        <span
          key={item?.card.info.id}
          className=" flex bg-white justify-between p-3 items-center mt-2"
        >
          <span className="flex flex-col border-b-2">
            <p>{item.card.info.name}</p>
            <p>Price: {item.card.info.price / 10}</p>
            <p>{item.card.info.description}</p>
          </span>

           

          <span className="w-48 rounded-2xl border">
           <button
              onClick={() => addCartItem(item)}
              className="absolute cursor-pointer p-2 rounded-lg bg-black font-bold text-white"
            >
              Add +
            </button>
              <ToastContainer/>
           
            <img
              className="w-full object-cover overflow-hidden rounded-2xl"
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
