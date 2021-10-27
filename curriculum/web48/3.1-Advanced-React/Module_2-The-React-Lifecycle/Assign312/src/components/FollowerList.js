import React from "react"
import axios from 'axios'
import Follower from './Follower'



class FollowerList extends React.Component {
    
    state = {        
        followers: []        
      }

      componentDidUpdate(prevProps, prevState) {
        axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
            .then(res=> {
            //   debugger
              this.setState({
                ...this.state,
                followers: res.data
              });  
            })
            .catch(err=> {
                console.log(err);
            });
      }

    render () {
        return (
            <div className ="follower">
                {this.state.followers.map(follower => {
                    return <Follower follower={follower} key={follower.id}  />
                })}
            </div>

        );
    }
}

export default FollowerList;