import React from 'react'
import axios from 'axios';


const Profile = (props) => {
    const Logout = async () => {
        try {
            if (window.confirm("Are you Sure about to Logout ") === true) {
                const serverUrl = "http://localhost:8080/logout";
                const response = await axios.get(serverUrl)
                if (response.data.error) {
                    alert("success fully Logout")
                    window.location.href = "/";
                }
            }

        } catch (err) {
            alert("You have not Logged out")
        }
    }
    return (
        <div>
            <h1>Name:{props.currUser.name}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white my-3 mx-3 font-bold py-2 px-4 rounded" onClick={Logout}>
                Logout
            </button>
        </div>

    )
}

export default Profile