import { ADD_USER, UPDATE_USER, DELETE_USER,RANDOM_USER } from '../actions/actionTypes';

const initialState={
    step:"",
    usersList:[],
    randomUserList:[]
};
 
export const userReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ADD_USER:
            
            console.log(action.data);
            
            let Adduser={
            userId:action.userId,
            firstName:action.data.firstName,
            lastName:action.data.lastName,
            gender:action.data.gender,
            email:action.data.email,
            dob:action.data.dob,
            password:action.data.password,
            address:action.data.address,
            city:action.data.city,
            state:action.data.state,
            pinCode:action.data.pinCode,
            contactNo:action.data.contactNo
            }


            return {...state,
                usersList:[...state.usersList, Adduser]
              }
        case UPDATE_USER:
            console.log("updated data: "+JSON.stringify(action.data))
            console.log("updated id: "+action.prevId)
           
             return state.usersList.map((user)=>{
                if(user.userId===action.prevId){
                    console.log("inside if")
                    return {
                        ...user,
                        ...action.data
                      }
                }else{
                    console.log("inside else")
                    return user;
                }
                
            });
        case DELETE_USER:
    
            let indexToDelete=null;
            state.usersList.map((user,index)=>{
                    
                if(user.userId===action.idToDelete){
                    console.log("index is: "+index)
                    indexToDelete= index;
                
                    
                }
            })
            console.log(indexToDelete);
      
            let newState= state.usersList.filter((user,index)=>index!==indexToDelete) //reomving particular record from array
            // let newState=state.splice(indexToDelete,1); //Another way to remove records from array.
            return newState;
        case RANDOM_USER:
            console.log(action.data);

            return {...state,
                randomUserList:[...state.randomUserList, action.data.results[0]]
              }
         
    
        default:
            return state;
    }
}