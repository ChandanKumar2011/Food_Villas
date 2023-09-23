import RestaurantCard from "./RestaurantCard";
import {restaurants} from "../../common/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../../common/useOnline";
import { filterData } from "../../common/helper";

const Body = () => {

        const [searchText, setSearchText] = useState("");
        const [allRestaurants, setAllRestaurants] = useState([]);
        const [filteredRestaurants, setFilteredRestaurants] = useState([]);

        useEffect(() => {
           getRestaurants();
        }, []);

        async function getRestaurants() {

            setTimeout(() => {
                const data = restaurants;
            setAllRestaurants(data);
            setFilteredRestaurants(data);
            }, 1000);
        }
         
       const isOnline = useOnline();

       if(!isOnline){
        return <h2>offline , please check your internet connection</h2>
       }

    return filteredRestaurants.length === 0 ?( <Shimmer /> ): 
    (
        <>
        <div className="Body">
            <div className="search">
             <input type="text"
             onChange={(e) => setSearchText(e.target.value)}
             placeholder="search" 
             className="search"
             value={searchText}
             ></input> 
             
               <button onClick= {() => {
                const data = filterData(searchText, allRestaurants);

                setFilteredRestaurants(data);
               }}
               >Search</button>
            </div>
            <div className="res-container">
             
             {
                filteredRestaurants.map((restaurant) => {
                    return(
                        <Link to={"restaurant/" + restaurant.id}>
                          <RestaurantCard key={restaurant.id} resDetails ={restaurant}/>
                        </Link>
                    );
                })}
            </div>

        </div>
        </>
    );
};

export default Body;