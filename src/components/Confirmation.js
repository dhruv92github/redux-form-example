import React, { Component } from 'react'

export default class Confirmation extends Component {



  confirmAndSubmit=(e)=>{
    e.preventDefault();
    this.props.handleSubmit();
    console.log("cccc")
    this.saveAndContinue();
}
saveAndContinue=()=>{
  
  this.props.nextStep();
}

back=(e)=>{
    e.preventDefault();
    this.props.prevStep();
}
  render() {
    const {firstName,lastName,gender,dob,email,password,address,city,state,pinCode,contactNo}=this.props.user;
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td>First Name :</td>
            <td>{firstName}</td>
          </tr>
          <tr>
            <td>Last Name :</td>
            <td>{lastName}</td>
          </tr>
          <tr>
            <td>Gender  :</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>DOB  :</td>
            <td>{dob}</td>
          </tr>
          <tr>
            <td>Email  :</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Password :</td>
            <td>{password}</td>
          </tr>
          <tr>
            <td>Contact No :</td>
            <td>{contactNo}</td>
          </tr>
          <tr>
            <td>Address :</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td>City :</td>
            <td>{city}</td>
          </tr>
          <tr>
            <td>State :</td>
            <td>{state}</td>
          </tr>
          <tr>
            <td>Pin code :</td>
            <td>{pinCode}</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={this.back}>Edit</button> &nbsp;&nbsp;&nbsp;
              <button onClick={this.confirmAndSubmit}>Confirm And Submit</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
