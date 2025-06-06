
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";
import UserContext from "../utils/UserContext";


class About extends React.Component{
    constructor(props){
        super(props);

        //console.log("parent constructor");
    }


    componentDidMount() {
        //console.log("parent component Did Mount");
    }


    render() {
        //console.log("parent Render");
        return(
            <div>
                <h1>about Class Component</h1>
                <div>
                    loggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>

                </div>
                <h2>This the Users Details</h2>
                <UserClass name={"First(Class)"}location={"Hyderabad"} />
            </div>
        );
    };
};


export default About;
// const About = () => {
    
//     return(
//         <div>
//             <h1>about</h1>
//             <h2>This the Users Details</h2>
//             <UserClass name={"Dhana Sagar (Class)"}
//             location={"Hyderabad"} />
//         </div>
//     );
// };
