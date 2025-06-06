import React from "react";
import {useState} from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(2)
    return( 
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <h1>count={count}</h1>
        <h1>Name:{props.name}</h1>
        <h2>Location:Hyderabad</h2>
        <h2>Contact:sagardhana386@gmail.com</h2>
    </div>
    );
};
export default User;