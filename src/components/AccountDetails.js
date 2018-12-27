import React, { Component } from 'react'


export default class AccountDetails extends Component {


    saveAndContinue=(e)=>{
        e.preventDefault();
        this.props.nextStep();
    }

    back=(e)=>{
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
    return (
      <div>
          <form onSubmit={this.saveAndContinue}>
            <h3>Account Details </h3>
            <table>
                <tbody>
                
                <tr>
                    <td>Email</td>
                    <td>
                    <input type="text" name="email" 
                    value={this.props.user.email} onChange={this.props.handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Re-type Email</td>
                    <td>
                    <input type="text" id="re-email" 
                     onChange={this.props.handleMatch}/>
                    </td>
                </tr>
                
                <tr>
                    <td>Password</td>
                    <td>
                    <input type="password" name="password" 
                    value={this.props.user.password} onChange={this.props.handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Re-type Password</td>
                    <td>
                    <input type="password" id="re-pass" 
                     onChange={this.props.handleMatch}/>
                    </td>
                </tr>
                
                <tr>
                    <td>Contact no</td>
                    <td>
                    <input type="number" name="contactNo" 
                    value={this.props.user.contactNo} onChange={this.props.handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    
                    </td>
                    <td>
                    <button onClick={this.back}>Back</button> &nbsp;&nbsp;&nbsp;
                    <button onClick={this.saveAndContinue}>Save And Continue</button>
                    
                    </td>
                </tr>
                </tbody> 
            </table>
        </form>
        
      </div>
    )
  }
}
