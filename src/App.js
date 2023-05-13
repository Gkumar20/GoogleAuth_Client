import './App.css';
import { useEffect, useContext } from 'react';
import UserContext from '../src/context/Users/userContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Login from './components/UserAuth/Login';





function App() {
  const { currUser, getCurrUser } = useContext(UserContext);
  let profileElement, loginElement;

  //navigate to profile page
  if (currUser !== null) {
    loginElement = <Navigate to="/profile" />;
  } else {
    loginElement = <Login />;
  }

  //Navigate to login page
  if (currUser !== null) {
    profileElement = <Profile currUser={currUser} />;
  } else {
    profileElement = <Navigate to="/login" />;
  }


  useEffect(() => {
    getCurrUser();
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home currUser={currUser}/>} />
        <Route path='/login' element={loginElement} />
        <Route path={`/profile/${currUser ? currUser.username : ""}`} element={profileElement} />
      </Routes>
    </div>
  );
}

export default App;


