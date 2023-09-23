import { useParams } from "react-router-dom";
import { REST_IMG_URL } from "../../common/constant";
import useRestaurantInfo from "../../common/useRestaurantInfo";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
     
    const params = useParams();
   
    const restaurant = useRestaurantInfo(params.id);

       console.log(restaurant);   
    return !restaurant ? (<Shimmer/>) : 
    (
        <div>
            <h1>Restaurant Id : {params.id}</h1>
            <img 
                src={ `${REST_IMG_URL}${restaurant.cloudinaryImageId}` }></img>
            <h2>{restaurant.name}</h2>
            <h2>{restaurant.city}</h2>
            <h2>{restaurant.menu.items[0].name}</h2>
          
            console.log()
          
        </div>
    );
};

export default RestaurantMenu;
