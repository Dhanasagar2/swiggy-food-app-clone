import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu =() => {
    
    const{resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState();
    
     if (resInfo === null) return <Shimmer/>; 
     
     const restaurantCard  = resInfo?.cards?.find(
        (card) => card?.card?.card?.info);
    
     const {name,cuisines,costForTwoMessage,
        } = restaurantCard?.card?.card?.info ||{}

        
        const itemCards = resInfo?.cards
        ?.flatMap((card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        ?.flatMap((card) => card?.card?.card?.itemCards)
        ?.filter(Boolean) || [];
     

        const categories = resInfo?.cards
        ?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.filter(c => {
          const type = c?.card?.card?.["@type"];
          return (
            type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
          );
        });
      
        const safeCategories = categories || [];


       //console.log("Menu Categories list :", categories);



     return (
     <div className="text-center">      
        <h1 className="font-bold my-8 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
            {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
                {/* controlled components  */}
        {categories.map((category, index) => {

        const cardData = category?.card?.card;
        const isNested = cardData?.categories;

        return isNested
        ? cardData.categories.map((cat, i) => (
        <RestaurantCategory 
        key={`${index}-${i}`} 
        data={cat} 
        showItems={showIndex === `${index}-${i}`}
        setShowIndex={() => setShowIndex(`${index}-${i}`)}
        />
        ))
        : <RestaurantCategory 
        key={index} 
        data={cardData} 
        showItems={index === showIndex ? true : false}
        setShowIndex = {() => setShowIndex(index)}
        />;
        })}
        </div>
    );
};

export default RestaurantMenu;

