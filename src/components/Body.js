import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import{Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body =() => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    //console.log("Body rendered" , listOfRestaurants);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch 
        ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        //console.log(json); 

        const restaurantCard = json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          
          const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
          
          setListOfRestaurants(restaurants);
          setFilteredRestaurants(restaurants);
          
    };
    
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
        return ( 
        <h1>
            Looks Like You're OffLine Check your Internet Connection.!!
        </h1>
        );

        const {loggedInUser, setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ? ( <Shimmer /> ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                <input 
                type="text" 
                data-testid ="searchInput"
                className="border border-solid border-black" 
                value={searchText} 
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>
                <button className="px-4 py-1 bg-green-500 m-4 rounded-lg" 
                onClick={() => {
                    //filter the restaurant card and update the ui
                    //searchtext
                    console.log(searchText);
                    const filteredRestaurants= listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurants(filteredRestaurants);

                }}
                >
                    search
                </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                    //filter logic here
                    const filteredList = (searchText? filteredRestaurants: listOfRestaurants).filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilteredRestaurants([...filteredList]);
                }}
                > 
                Top Rated Restaurants
            </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                <input className="border border-black p-2" 
                value={loggedInUser}
                onChange={(e) => setUserName (e.target.value)}
                />
                </div>
            </div>
            <div className="flex flex-wrap ">
                {filteredRestaurants.map((restaurant) => (
                        <Link 
                        key={restaurant.info.id} 
                        to ={"/restaurants/" + restaurant.info.id}
                        >

                        {restaurant.info.promoted ? (
                            <RestaurantCardPromoted resData ={restaurant} />                          
                            ) : (
                              <RestaurantCard resData={restaurant}/>
                            )}
                        </Link> 
                     ))  
                }
            </div>
        </div>
    );
};


export default Body;
