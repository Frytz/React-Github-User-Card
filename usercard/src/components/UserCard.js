import React from 'react';
import './CardStyles.css' 
// import { GithubContributions } from "react-github-graph";

 const UserCard = props => {
 console.log('props',props.user)
    return (
      <div className="container">
        <div className="card">
          <h2>{props.user.name}</h2>
          <div className="av-img">
            <img className="av" src={props.user.avatar_url} alt="avatar" />
          </div>
          <div className="context">
            <div className="scroll">
              <h5 className="bio">"{props.user.bio} "</h5>

              <p>Following: {`${props.follows}`}</p>
              <p>Followers: {`${props.follow}`} </p>
          
         
            <p>end example</p>
            </div>
            {/* <GithubContributions username={props.user.login} /> */}
          </div>
        </div>
      </div>
    );
}

export default UserCard;