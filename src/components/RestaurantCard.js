import { useContext } from "react";
import{CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard= (props) => {
    const {resData}=props;
    //console.log(resData);

    const {loggedInUser} = useContext(UserContext);
    
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,
    } =resData?.info;
    
    return (
        <div data-testid="resCard" 
        className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img 
              className="rounded-lg "
              alt="Restaurant Logo"
              src={CDN_URL + cloudinaryImageId}
             />

            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{parseInt(costForTwo.replace(/[^0-9]/g, ""))} for two</h4>
            <h4>{resData.info.sla.deliveryTime}minutes</h4>
            <h4>user:{loggedInUser}</h4>
        </div>

    );
};

// Higher Order Component

// input == RestaurantCard ===>> Promoted labeled RestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg" >Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;