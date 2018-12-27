import React, { Component } from 'react'


export default class PersonalDetails extends Component {


    saveAndContinue=(e)=>{
        e.preventDefault();
        this.props.nextStep();
    }
    

  render() {
    return (
      <div>
          <form onSubmit={this.saveAndContinue}>
            <h3>Personal Details </h3>
            <table>
                <tbody>
                <tr>
                    <td>First Name</td>
                    <td>
                    <input type="text" name="firstName" 
                    value={this.props.user.firstName} onChange={this.props.handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>
                    <input type="text" name="lastName" value={this.props.user.lastName}
                    onChange={this.props.handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <select name="gender" onChange={this.props.handleChange} >
                            <option value={this.props.user.gender}>Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </td>
                </tr>
                
                
                <tr>
                    <td>DOB</td>
                    <td>
                    <input type="date" name="dob" 
                    value={this.props.user.dob} onChange={this.props.handleChange}/>
                    </td>
                </tr>
                
                <tr>
                    <td>
                   
                    </td>
                    <td>
                    <button onClick={this.props.nextStep}>Save And Continue</button>
                    
                    </td>
                </tr>
                </tbody> 
            </table>
        </form>
        
      </div>
    )
  }
}
