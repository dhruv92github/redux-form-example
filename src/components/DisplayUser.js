import React, { Component } from 'react'


export default class DisplayUser extends Component {
    constructor(props){
        super(props);
        // console.log('.......'+JSON.stringify(this.props.users))
        this.state={
            isEditable:false,
            
            user:{
                userId:"",
                firstName:"",
                lastName:"",
                gender:"",
                email:"",
                dob:"",
                password:"",
                address:"",
                city:"",
                state:"",
                pinCode:"",
                contactNo:"",
                prevId:"-1"


            }
        }
    }



    handleEdit=(e,prevUser)=>{
        console.log(e+"////")
        
        
        this.setState({isEditable:true})
        this.setState({currentRow:e.userId})
        
        this.setState({
            user:{
                userId:e.userId,
                firstName:e.firstName,
                lastName:e.lastName,
                gender:e.gender,
                email:e.email,
                dob:e.dob,
                password:e.password,
                address:e.address,
                city:e.city,
                state:e.state,
                pinCode:e.pinCode,
                contactNo:e.contactNo,
                prevId:"-1"
            }
        })
        setTimeout(() => {
            
            console.log(this.state.user);
        }, 500);
    }
    handleChange=(e)=>{
        let {name,value}=e.target;
        console.log(name,value);
        const {user}=this.state;
        this.setState({
            user:{...user,
                [name]:value
            }
        })
        
    }

    handleUpdate=(e,args)=>{
        console.log("e : "+e)
        console.log("update clicked");
        let updateUser=JSON.parse(JSON.stringify(this.state.user));
        updateUser.prevId=e;
        console.log(updateUser);
        this.setState({user:updateUser});
        setTimeout(() => {
            let {prevId}=this.state.user;
            console.log(prevId);
            console.log(this.state.user);
            const {user}=this.state;
            this.setState({isEditable:false})
            this.setState({currentRow:-1})
            console.log(user);
            this.props.update(user);
            console.log("user updated")
        }, 500);
   }

    handleDelete=(e,args)=>{
        console.log(e);
        console.log("handleDelete Called");
        this.props.delete(e.userId);
        console.log("user deleted");

    }


  render() {
      const users= this.props.users.length===0 &&  (
          <div>
              <p>No Records available!!</p>
          </div>
      )
     
    const tableHeader= this.props.users &&(this.props.users.length >0) && (
        <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Password</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Pin code</th>
            <th>Contact no</th>
            <th>Actions</th>
        </tr>
    )
    let tableData=this.props.users && this.props.users.map((user,i)=>{
        let changeData= (this.state.isEditable && this.state.currentRow===user.userId)?
        (<tr key={user.userId}> 
            <TDI name="userId" data={user.userId} handleChange={this.handleChange} />
            
            <TDI name="firstName" data={user.firstName} handleChange={this.handleChange} />
            <TDI name="lastName" data={user.lastName} handleChange={this.handleChange}/>
            <TDI name="gender" data={user.gender} handleChange={this.handleChange}/>
            <TDI name="email" data={user.email} handleChange={this.handleChange}/>
            <TDI name="dob" data={user.dob} handleChange={this.handleChange}/>
            <TDI name="password" data={user.password} handleChange={this.handleChange}/>
            <TDI name="address" data={user.address} handleChange={this.handleChange}/>
            <TDI name="city" data={user.city} handleChange={this.handleChange}/>
            <TDI name="state"  data={user.state} handleChange={this.handleChange}/>
            <TDI name="pinCode"  data={user.pinCode} handleChange={this.handleChange}/>
            <TDI name="contactNo"  data={user.contactNo} handleChange={this.handleChange}/>
            <td><button onClick={this.handleUpdate.bind(null,user.userId)} >Update</button> </td>
        </tr>):(<tr key={user.userId}>
            <TD data={user.userId} />
            
            <TD data={user.firstName}/>
            <TD data={user.lastName}/>
            <TD data={user.gender}/>
            <TD data={user.email}/>
            <TD data={user.dob}/>
            <TD data={user.password}/>
            <TD data={user.address}/>
            <TD data={user.city}/>
            <TD data={user.state}/>
            <TD data={user.pinCode}/>
            <TD data={user.contactNo}/>
            <TDB handleEdit={this.handleEdit.bind(this,user)} handleDelete={this.handleDelete.bind(this,user)} />
        </tr>)
        return (
            changeData
        )
    })
    return (
        <div>
            {users}
            <table style={{width:"90%"}}>
                <thead>
                    {tableHeader}
                </thead>
                <tbody>
                    {tableData}
                </tbody>
                
            </table>
        </div>
    )
  }
}
const TD=(props)=>{
    return(
        <td style={{border:"1px solid black",padding:"5px",borderCollapse:"collapse"}}>{props.data}</td>
    )
}
const TDI=(props)=>{
    return(
        <td style={{border:"1px solid black",padding:"5px",borderCollapse:"collapse"}}>
        <input type="text" name={props.name} defaultValue={props.data} onChange={props.handleChange}/>
        </td>
    )
}
const TDB=(props)=>{
    return(
        <td>
            <button onClick={props.handleEdit} >Edit</button> &nbsp;&nbsp;&nbsp;
            <button onClick={props.handleDelete} >Delete</button>
        </td>
    )
}