import React, { Component } from 'react'


export default class ContactDetails extends Component {

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
        <form onSubmit={this.handleSubmit}>
            <h3>Contact Details </h3>
            <table>
                <tbody>
                
                <tr>
                    <td>Address</td>
                    <td>
                    <input type="text" name="address" 
                    value={this.props.user.address} onChange={this.props.handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>
                    <input type="text" name="city" 
                    value={this.props.user.city} onChange={this.props.handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>State</td>
                    <td>
                        <StateList1 handleChange={this.props.handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>Pin code</td>
                    <td>
                    <input type="number" name="pinCode" 
                    value={this.props.user.pinCode} onChange={this.props.handleChange} />
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

const StateList1=(props)=>{
    return (
        <select name="state" onChange={props.handleChange} >
                            <option value="Andra Pradesh">Andra Pradesh</option>
                            <option value="Arunachal Pradesh ">Arunachal Pradesh </option>
                            <option value="Assam ">Assam </option>
                            <option value="Bihar ">Bihar </option>
                            <option value="Chhattisgarh ">Chhattisgarh </option>
                            <option value="Goa ">Goa </option>
                            <option value="Gujarat ">Gujarat </option>
                            <option value="Haryana ">Haryana </option>
                            <option value="Himachal Pradesh ">Himachal Pradesh </option>
                            <option value="Jammu and Kashmir ">Jammu and Kashmir </option>
                            <option value="Jharkhand ">Jharkhand </option>
                            <option value="Karnataka ">Karnataka </option>
                            <option value="Kerala ">Kerala </option>
                            <option value="Madya Pradesh ">Madya Pradesh </option>
                            <option value="Maharashtra ">Maharashtra </option>
                            <option value="Manipur ">Manipur </option>
                            <option value="Meghalaya ">Meghalaya </option>
                            <option value="Mizoram ">Mizoram </option>
                            <option value="Nagaland ">Nagaland </option>
                            <option value="Orissa "> Orissa</option>
                            <option value="Punjab ">Punjab </option>
                            <option value="Rajasthan ">Rajasthan </option>
                            <option value="Sikkim ">Sikkim </option>
                            <option value="Tamil Nadu ">Tamil Nadu </option>
                            <option value="Telagana ">Telagana </option>
                            <option value="Tripura ">Tripura </option>
                            <option value="Uttaranchal ">Uttaranchal </option>
                            <option value="Uttar Pradesh ">Uttar Pradesh </option>
                            <option value="West Bengal ">West Bengal </option>
                            <option value="Delhi ">Delhi </option>
                            <option value="Chandigarh ">Chandigarh </option>
                            <option value="Andaman and Nicobar Islands ">Andaman and Nicobar Islands </option>
                            <option value="Dadar and Nagar Haveli ">Dadar and Nagar Haveli </option>
                            <option value="Daman and Diu ">Daman and Diu </option>
                            <option value="Lakshadeep ">Lakshadeep </option>
                            <option value="Pondicherry ">Pondicherry </option>
                            
                        </select>
    )
}