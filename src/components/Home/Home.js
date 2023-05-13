import React from 'react'
import { Link} from 'react-router-dom';




const Home = (props) => {

    return (
        <div>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white my-3 mx-3 font-bold py-2 px-4 rounded">
            <Link to="/login">login</Link>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white my-3 mx-3 font-bold py-2 px-4 rounded">  
            <Link to={`/profile/${props.currUser?props.currUser.username:""}`}>profile</Link>
            </button>
            
        </div>

    )
}

export default Home