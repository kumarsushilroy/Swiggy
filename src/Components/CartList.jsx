import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../Store/cartSlice";
import { showCartMethod } from "../../Store/cartSlice";

const CartList = ({ showCartStatus }) => {
  const dispatch = useDispatch();

  const removeCartItem = (item) => {
    console.log("iddd", item);
    dispatch(removeItem(item));
  };

  const closeCart = () => {
    dispatch(showCartMethod());
  };

  const listItems = useSelector((store) => store.cart.items);

  return (
    <div>
      {listItems.length && showCartStatus ? (
        <span className="flex flex-col h-[450px] absolute overflow-y-scroll right-1 z-10 bg-white  mt-5 shadow-lg rounded-2xl w-6/12 justify-self-end ">
          <button
            onClick={closeCart}
            className="flex cursor-pointer absolute text-2xl right-3 mb-4"
          >
            X
          </button>
          <span className="flex justify-around bg-orange-300 p-2">
            <p>Name</p>
            <p>Category</p>
            <p>Price</p>
            <p>img</p>
            <p>Action</p>
          </span>
          {listItems?.map((item) => (
            <span className="flex p-2 items-center justify-around ">
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <img
                className="w-28 h-20 rounded-lg"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  item.imageId
                }
                alt=""
              />
              <span>
                <button
                  onClick={() => removeCartItem(item?.id)}
                  className="bg-red-600 cursor-pointer text-white rounded-lg p-2 font-bold"
                >
                  remove
                </button>
              </span>
            </span>
          ))}
        </span>
      ) : (
        <span className="flex flex-col h-28 justify-center absolute right-1 z-10 bg-white  mt-5 shadow-lg rounded-2xl w-6/12 justify-self-end ">
          <button
            onClick={closeCart}
            className="flex cursor-pointer absolute text-2xl right-3 mb-4"
          >
            X
          </button>

          <h1 className="text-center text-2xl text-orange-500">
            No Items Added Yet 🙄😶
          </h1>
        </span>
      )}
    </div>
  );
};

export default CartList;
