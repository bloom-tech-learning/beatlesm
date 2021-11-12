import React, { useEffect } from "react";
import Friend from "./Friend";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendList extends React.Component {
    state = {
        friends: []
    }
    
    componentDidMount() {
        axiosWithAuth()
        .get ('/friends')        
        .then (resp => {
            console.log('resp in FriendsList: ', resp);
            this.setState({
                ...this.state,
                friends: resp.data
              });
            // console.log('useHistory: ', useHistory()); 
        //     localStorage.removeItem("token")
        //     push ("/login");       
        })

    };

    render() {
        // console.log('this.props', this.state);
        return (
            <div>
                
                {
                    this.state.friends.map(friend => {
                        return (
                            <Friend key={friend.id} friend={friend}  />
                        )
                    })
                }

            </div>
            )
    }
}

export default FriendList;