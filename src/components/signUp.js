import React, { Component } from 'react'
import  "./signUpstyle.css";
import PersonalDetails from './PersonalDetails';
import AccountDetails from './AccountDetails';
import ContactDetails from './ContactDetails';
import Confirmation from './Confirmation';
import Success from './Success';

export default  class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            step:1,
            user:{
                firstName:"",
                lastName:"",
                gender:"Male",
                email:"",
                dob:"",
                password:"",
                address:"",
                city:"",
                state:"Andhra Pradesh",
                pinCode:"",
                contactNo:""


            }
        }
    }

nextStep=()=>{
    this.setState({step:(this.state.step+1)})
   
    setTimeout(()=>console.log(this.state.step),1000);
}

prevStep=()=>{
    this.setState({step:(this.state.step-1)})
}

handleChange=(e)=>{
    
    const {name,value}=e.target;
    
    const {user}=this.state;
    this.setState({
        user:{...user,
            [name]:value
        }
    })

}

handleSubmit=(e)=>{
    // e.preventDefault();
    console.log('button pressed');
    const {user}=this.state;
    console.log(user);
    this.props.add(user);
    this.setState({
        user:{
                firstName:"",
                lastName:"",
                gender:"Male",
                email:"",
                dob:"",
                password:"",
                address:"",
                city:"",
                state:"Andhra Pradesh",
                pinCode:"",
                contactNo:""
        }
    })

    setTimeout(()=>console.log(this.state.user),1000);
    console.log("form reset completed")
}

handleMatch=(e)=>{
    const {value,id}=e.target;
    if (id==='re-email') {
        if (this.state.user.email===value) {
            document.getElementById(id).style.color = "green";
        }else{
            document.getElementById(id).style.color = "red";
        }
    }else if (this.state.user.password===value) {
        document.getElementById(id).style.color = "green";
        }else{
            document.getElementById(id).style.color = "red";
        }
}

  render() {

    const {step,user}=this.state;

    switch (step) {
        case 1:
            
            return (
                <PersonalDetails
                user={user}
                nextStep={this.nextStep} 
                handleChange={this.handleChange}
                />
            )
        case 2:
            
            return (
                <AccountDetails 
                user={user}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                handleMatch={this.handleMatch}
                />
            )
        case 3:
            
            return (
                <ContactDetails 
                user={user}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                />
            )
        case 4:
            
            return (
                <Confirmation 
                user={user}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleSubmit={this.handleSubmit}
                />
            )

        case 5:
            return (<Success />)
        default:
            break;
    }


   
  }
}





