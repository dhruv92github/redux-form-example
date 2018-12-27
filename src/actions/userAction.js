import {ADD_USER,UPDATE_USER,DELETE_USER,RANDOM_USER} from './actionTypes';
let nextUserId=111;

export const addUser=(data)=>{
    return {
        type:ADD_USER,
        userId:nextUserId++,
        data
    }

}

export const updateUser=(data)=>{
    console.log(data)
    return{
        type:UPDATE_USER,
        prevId:data.prevId,
        data
    }
}

export const deleteUser=(id)=>{
    console.log("id to be deleted is: "+id);
    return {
        type:DELETE_USER,
        idToDelete:id
    }
}
export const getRandomUser=()=>{
    return dispatch=>{
        fetch('https://randomuser.me/api/')
        .then(res=>res.json())
        .then(randUser=>{
            dispatch({type:RANDOM_USER,data:randUser})
        })
    }
}