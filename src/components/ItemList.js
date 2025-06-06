import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    //console.log(items);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        // Dispatch an action
    };

    return(
      <div>
            {items.map((item, index) => (
                <div 
                data-testid="foodItems"
                 key={`${item.card.info.id}- ${index}`}
                 className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between"
                 >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> 
                                - ₹
                                { item.card.info.price 
                                ? item.card.info.price/100 
                                :item.card.info.defaultprice/100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4 ">
                        <div className="absolute">
                            <button className="px-2 py-1 text-sm mx-14 rounded bg-green-400 text-white shadow " 
                            onClick = {()=>handleAddItem(item)}>
                                Add+
                            </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                    </div>
               </div> 
            ))}  
    </div>
  );
};

export default ItemList;