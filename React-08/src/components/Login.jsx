
import React from 'react'
import { useState,useEffect,useContext } from 'react'
import UserContext from '../Context/UserContext';
const [userName, setuserName] = useState("")
const [password, setpassword] = useState("")
const Login = () => {
  const {setUser}=useContext(UserContext)
  function handelSubmit(){
        setUser({userName,password})
      }
    return (
      
    <div>
        <h2>
            Login
        </h2>
        <input type="text" placeholder='userName' value={userName} onChange={(e)=>setuserName(e.target.value)} /> 
        <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} /> 
        <button onClick={handelSubmit}>
            Submit
        </button>

    </div>
  ) 
}

export default Login















//-----------------------------------
// import React from 'react'
// import { useState,useEffect,useContext } from 'react'
// import UserContext from '../Context/UserContext';
// import { Navigate, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [userName, setuserName] = useState("");
//     const [password, setpassword] = useState("")
//     const {setUser}=useContext(UserContext)  
//     const navigate = useNavigate();
//     const handelSubmit=(e)=>{
//         e.preventDefault()
//         const user = {
//       userName,
//       password
//     };
//         setUser(user);
//           navigate('/profile');
//     }
//   return (
//     <div>
//         <h2>
//             Login
//         </h2>
//         <input type="text" placeholder='userName' value={userName} onChange={(e)=>setuserName(e.target.value)} /> 
//         <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} /> 
//         <button onClick={handelSubmit}>
//             Submit
//         </button>

//     </div>
//   ) 
// }

// export default Login

//-------------------------------------
//9  creating a login form in here as 
// import React from 'react'
// import { useState,useEffect,useContext } from 'react'
// const Login = () => {
//     const [userName, setuserName] = useState("");
//     const [password, setpassword] = useState("")
//     const handelSubmit=()=>{
//     }
//   return (
//     <div>
//         <h2>
//             Login
//         </h2>
//         <input type="text" placeholder='userName' value={userName} onChange={setuserName=(e)=>(e.target.value)} /> 
//         <input type="password" placeholder='password' value={password} onChange={setpassword=(e)=>(e.target.value)} /> 
//         <button onClick={handelSubmit}>
//             Submit
//         </button>
//     </div>
//   ) 
// }

// export default Login

//10 now we are going to work with useContext in here

//this line is from the context folder in here as u can see
// const {serUser}=useContext(UserContext)

// from

// import React from 'react'
// import { useState,useEffect,useContext } from 'react'
// import UserContext from '../Context/UserContext';

// const Login = () => {
//     const [userName, setuserName] = useState("");
//     const [password, setpassword] = useState("")
//     const {setUser}=useContext(UserContext)
//     const handelSubmit=()=>{

//     }
//   return (
//     <div>
//         <h2>
//             Login
//         </h2>
//         <input type="text" placeholder='userName' value={userName} onChange={setuserName=(e)=>(e.target.value)} /> 
//         <input type="password" placeholder='password' value={password} onChange={setpassword=(e)=>(e.target.value)} /> 
//         <button onClick={handelSubmit}>
//             Submit
//         </button>

//     </div>
//   ) 
// }

// export default Login


//11
// so this line gets context from the user 
// const {setUser}=useContext(UserContext)  

// from the file context with UserContext.jsx
//helps in updating the global value to it

//event.preventDefault(); prevent default browser methods like reload page etc

//12 working on the event function to set values
// import React from 'react'
// import { useState,useEffect,useContext } from 'react'
// import UserContext from '../Context/UserContext';

// const Login = () => {
//     const [userName, setuserName] = useState("");
//     const [password, setpassword] = useState("")
//     const {setUser}=useContext(UserContext)  
//     const handelSubmit=(e)=>{
//         e.preventDefault()
//         setUser({userName,password});

//     }
//   return (
//     <div>
//         <h2>
//             Login
//         </h2>
//         <input type="text" placeholder='userName' value={userName} onChange={(e)=>setuserName(e.target.value)} /> 
//         <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} /> 
//         <button onClick={handelSubmit}>
//             Submit
//         </button>

//     </div>
//   ) 
// }

// export default Login

//13 setUser is done and now working on Profilepage 