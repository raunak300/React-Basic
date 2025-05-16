import React from 'react'
import UserContextProvider from "./Context/UserContextProvider"
const App = () => {
  return (
   <UserContextProvider>
    
  </UserContextProvider>
  )
}

export default App































// this is completed understanding the sir thing

// import { useState } from 'react'
// import Login from './components/Login'
// import Profile from './components/Profile'
// import { useContext } from 'react';
// import UserContext from './Context/UserContext';
//  // Adjust path if needed

// import UserContextProvider from './Context/UserContextProvider'
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import ProfilePage from './components/ProfilePage';

// function App() {
//   return (
//     <UserContextProvider>
//       <BrowserRouter>
//         <Main />
//       </BrowserRouter>
//     </UserContextProvider>
//   );
// }

// // This is needed so useNavigate can work
// function Main() {
//   const navigate = useNavigate();

//   const doNav = () => {
//     navigate('/login');
//   };
//   const {user,setUser}=useContext(UserContext)

//   return (
//     <>
//       <h1>Hello
//       </h1>
//     {user?.userName && <h1>{user.userName}</h1>}
//       <button onClick={doNav}>Login</button>

//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/profile" element={<Profile/>} />
//         <Route  path='/main' element={<ProfilePage/>} />
//       </Routes>
//     </>
//   );
// }

// export default App;
