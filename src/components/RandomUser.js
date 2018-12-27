import React, { Component } from 'react'

export default class RandomUser extends Component {
  render() {
      const data=this.props.randomUsers.map((rUsers)=>{
          console.log(rUsers);
          return (<div>
              <h3>User:</h3>
              <span>
                  Name: {rUsers.name.title} &nbsp; &nbsp;
                  {rUsers.name.first}  &nbsp; &nbsp;
                  {rUsers.name.last}</span><br/>
              <label>Gender: {rUsers.gender}</label><br/>
              <label>Email: {rUsers.email}</label><br/>
              <label>Nationality: {rUsers.nat}</label><br/>
              <label>Phone: {rUsers.phone}</label><br/>


              
          </div>)
      });
    return (
      <div>
        <h2>Random User</h2>
        <button onClick={this.props.getRandomUser} >Generate Random User</button>
        <br/>
        <div>
        <h2>Random User Details</h2>
            {data}
        </div>
     </div>
    )
  }
}
