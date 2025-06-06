import { useEffect, useState } from "react";
import {MENU_API} from "../utils/constants";

const useRestaurantMenu = (resId) => {
    
    const [resInfo, setResInfo] = useState(null); 


    useEffect(() =>{
        fetchData();
    }, []);
    
        const fetchData = async () => {
         try{

            const apiUrl = MENU_API(resId);

            const data = await fetch(MENU_API (resId));
            const json = await data.json();
            console.log("✅ json.data:", json.data);
            setResInfo(json.data);
            
            console.log("Fetching menu from:", MENU_API + resId);
         } catch(error) {
            console.error("Error fetching restaurant menu:", error);
         }
    };

    return resInfo;
};


export default useRestaurantMenu;