import { Link } from "react-router-dom";

function Rescard({ resData }) {
  console.log("RESdataaacc", resData);

  return (
    <div className="  rounded-2xl shadow-xl bg-gray-100 p-2">
      <div className="w-full">
        <img
          className=" w-full h-60  rounded-2xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            resData?.info?.cloudinaryImageId
          }
          alt=""
        />
      </div>
      <div>
        <h1 className="text-2xl font-extrabold pt-1">{resData?.info?.name}</h1>
        <span className="text-xl flex gap-2">
          <p className="font-bold"> 🧩{resData?.info?.avgRating}.</p>
          <p className="font-bold">{resData?.info?.sla?.slaString}</p>
        </span>
        <span className="flex flex-col gap-1 pl-2 mt-2">
          <p className="text-gray-400 font-semibold text-xl">
            {resData?.info?.cuisines.join(", ")}
          </p>
          <p className="text-gray-400 font-semibold text-xl">
            {resData?.info?.locality}
          </p>
        </span>
      </div>
    </div>
  );
}

export const PromotedComp = (Rescard)=>{
  return (props)=>{
    return (
      < >
       <p className="bg-black text-white p-2 font-bold rounded-lg absolute  ">Promoted</p>
       <Rescard {...props} />
      </>
    )
  }
}

export default Rescard;
