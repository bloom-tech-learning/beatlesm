import React from "react";

const Follower = props => {

    return (
        <div >             
            <div className = "follower-card">
            <img src={props.follower.avatar_url} alt={props.follower.login} width ="300"/>
            <h3>{props.follower.login}</h3>
            </div>            
        </div>
        );
    
}

export default Follower;