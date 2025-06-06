import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);

        this.state = {
            userInfo:{
                name:"dummyname",
                location:"default",
                avatarURL:"https://dummy-photo",
            },
        };
        //console.log(this.props.name+"child constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Dhanasagar2");
        const json = await data.json();
        
        //console.log("component Did Update"); 
        
        this.setState({
            userInfo: json,
         });

        //console.log(json);
        //console.log(this.props.name+"componentDidMount");
    }

    componentDidUpdate() {
        //console.log("component did updated");
    }

    componentWillUnmount() {
        //console.log("componentWillUnmount");
    }

    render() {
        const {name, location, avatar_url}=this.state.userInfo;
        //console.log(this.props.name+"child render");

        return (
        <div className="user-card">
        <h1>Name:{name}</h1>
        <h2>Location: {location || "Not available"}</h2>
            <img src="https://avatars.githubusercontent.com/u/181720346?v=4" alt="profile-img" />
        <h2>Contact:sagardhana386@gmail.com</h2>
    </div>
        );
    };
};

export default UserClass;