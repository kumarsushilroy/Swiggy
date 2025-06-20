import { useEffect, useState } from "react"

const usecallApi = (resId) =>{
 
    const [resCardInfo , setresCardInfo] = useState(null);

    const fetchApi = async()=>{
        let res = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.45970&lng=77.02820&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        res = await res?.json()
        setresCardInfo(res?.data);
    }
    useEffect(()=>{
      fetchApi();
    },[])

    return resCardInfo
}

export default usecallApi;