import { restaurant_info } from "./restaurant_info";
import { useState,useEffect } from "react";

const useRestaurantInfo = (id) =>{
    
     const [restaurantInfo, setRestaurantInfo] = useState(null); 

    useEffect(() =>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo () {
            
             // Making an api call with restaurant id 
            const data = restaurant_info;
            setRestaurantInfo(data[0]);
           
    }
    return restaurantInfo;

};

export default useRestaurantInfo;