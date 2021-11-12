import React from "react";
import './../CSS/Friend.css'

const Friend = (props) => {
    const {friend} = props

    return (
        <div className="friends-container">
            <div className="friend-card"></div>
                <div className="plant-card">
                <h3>Friend Info</h3>
                <p>name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>email: {friend.email}</p>
                
                </div>
        </div>
        
    );
}

export default Friend;