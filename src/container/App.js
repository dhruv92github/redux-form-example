import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import { bindActionCreators } from "redux";
import { addUser,updateUser,deleteUser,getRandomUser} from '../actions/userAction';
import { connect } from "react-redux";
import SignUp from '../components/signUp'; 
import DisplayUser from '../components/DisplayUser';
import RandomUser from '../components/RandomUser';



class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      <ul>
        <li>
          <Link to="/" >Add New User</Link>
        </li>
        <li>
          <Link to="/Users" > View users</Link>
        </li>
        <li>
          <Link to="/RandomUser">Get Random User</Link>
        </li>
      </ul>
      <br/>
      <Route path="/" exact={true} component={()=><SignUp add={this.props.add} />} />
      <Route path="/Users" component={()=><DisplayUser users={this.props.users.usersList} update={this.props.update} delete={this.props.delete} />}   />
      <Route path="/RandomUser" component={()=><RandomUser getRandomUser={this.props.getRandomUser} randomUsers={this.props.users.randomUserList} />} />
      
       
      </div>
    </Router>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    users:state.userReducer
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    add:bindActionCreators(addUser,dispatch),
    update:bindActionCreators(updateUser,dispatch),
    delete:bindActionCreators(deleteUser,dispatch),
    getRandomUser:bindActionCreators(getRandomUser,dispatch)

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
