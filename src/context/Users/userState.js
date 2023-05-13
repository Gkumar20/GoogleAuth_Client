import React, { useState} from 'react'
import UserContext from './userContext'


// import { useState } from 'react'
import axios from 'axios';

const UserState = (props) => {
  const hostUrl = "http://localhost:8080"
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [currUser, setCurruser] = useState(null)



  // get current User
  const getCurrUser = async () => {
    try {
      const serverUrl = "http://localhost:8080/login/success";
      const { data } = await axios.get(serverUrl)
      setCurruser(data.user)
      // console.log("user", data.user.isAdmin)
    } catch (err) {
      console.log(err)
    }
  }


// update user
  const updateUser = async (id, name) => {
    await axios.patch(`${hostUrl}/updateuser/${id}`, {
      "name": name,
    })
  }

  // get user 
  const getUser = async (id) => {
    const response = await axios({
      method: 'GET',
      url: `${hostUrl}/userinfo/${id}`
    })
    setUser(response.data.userProfile)
  }


  // delete user 
  const deleteUser = async (id) => {
    await axios({
      method: 'DELETE',
      url: `${hostUrl}/deleteuser/${id}`
    })
  }


  //get all users
  const getAllUser = async () => {
    try {
      const resp = await axios({
        method: 'GET',
        url: `${hostUrl}/getalluser`
      });
      
      setUsers(resp.data.userProfile);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <UserContext.Provider value={{ currUser, users,user, getAllUser, getCurrUser,getUser, updateUser,deleteUser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState