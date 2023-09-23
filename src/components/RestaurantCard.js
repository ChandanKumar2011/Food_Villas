import { REST_IMG_URL } from "../../common/constant";


const RestaurantCard = (props) => {

    const {name , cuisines, deliveryTiming, avgRating, cloudinaryImageId } = props.resDetails ;
        return (
           <div className="res-card">
                <img className="restaurant-image"
                src={ `${REST_IMG_URL}${cloudinaryImageId}` }></img>
             <div className="res-details">
                <div>
                   <h3>{name}</h3>
                   <h4>{cuisines}</h4>
                </div>
                <div>
                   <h4>{deliveryTiming}</h4>
                   <h4>{avgRating}</h4>
                </div>
             </div>
           </div>
        );
    }

    export default RestaurantCard;