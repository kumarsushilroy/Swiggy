
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showCartMethod } from "../../Store/cartSlice";

const Header = ()=>{

  const dispatch = useDispatch();

  const handleCartShowStatus = ()=>{
    dispatch(showCartMethod());
  }

  const cartItem = useSelector((store)=>store?.cart?.items.length)
  console.log('conosleeee',useSelector((store)=>store.cart.item));
 return(
    <>
    <div className="flex gap-4 justify-between items-center p-3 shadow-lg py-5">
        
         <Link to='/'><img className="w-16 bg-transparent" src="data:image/png;base64,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" /></Link> 
        
        
         
        <div className="flex gap-3 text-xl ">
          <span onClick={handleCartShowStatus} className="flex cursor-pointer">
            <p className="relative">Cart</p>
             <span className="  flex mt items-center font-bold absolute  ml-4 top-5  justify-center bg-orange-600  text-white w-7 h-7 rounded-full p-3 text-center">{cartItem}</span>
           <span >
            
           
            </span> 
          </span>
         <Link to='/about'><h1>About</h1></Link> 
         <Link to='/contact'><h1>Contact Us</h1></Link>  
           <Link to='/services'><h1>Services</h1></Link> 
        </div>

      </div>
    </>
 )
}

export default Header;