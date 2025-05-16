import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user}=useContext(UserContext);
  return (
    <div>
        name:{user.userName}
        
    </div>
  )
}

export default Profile


























//------------------------------------------------------
// import React from 'react'
// import { useState,useContext } from 'react'
// import UserContext from '../Context/UserContext';
// import { Navigate, useNavigate } from 'react-router-dom';
// const Profile = () => {
//     const {user,setUser}=useContext(UserContext);
//     const [password, setPassword] = useState(user.password || "");
//     const [Id, setId] = useState("");
//      const navigate = useNavigate();
//     const handelId=(e)=>{
        
//          e.preventDefault()
//          const updatedUser={
//             ...user,
//             password:password,
//             userId:Id
//          };
//          setUser(updatedUser);
//          navigate('/main')
//     }

//   return (
//     <div>
//         Name:<input type="text" value={user.userName} readOnly />
//         prev password:<input type="text" value={user.password} readOnly />
//         ChangePassword: <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />

//         <input type="text" placeholder='Create userID name' value={Id} onChange={(e)=>setId(e.target.value)} />
//         <button onClick={handelId}>
//             Submit
//         </button>
//     </div>
//   )
// }

// export default Profile

//------------------------------------------------------------
//14 this is profilepage

// import React from 'react'
// import { useState,useContext } from 'react'
// import UserContext from '../Context/UserContext';
// const Profile = () => {
//     const {user,setUser}=useContext(UserContext);
//     const [password, setPassword] = useState(user.password || "");
//     const [Id, setId] = useState("");
//     const handelId=(e)=>{
        
//          e.preventDefault()
//          const updatedUser={
//             ...user,
//             password:password,
//             userId:Id
//          };
//          setUser(updatedUser);
//     }
//   return (
//     <div>
//         Name:<input type="text" value={user.userName} readOnly />
//         prev password:<input type="text" value={user.password} readOnly />
//         ChangePassword: <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />

//         <input type="text" placeholder='Create userID name' value={Id} onChange={(e)=>setId(e.target.value)} />
//         <button onClick={handelId}>
//             Submit
//         </button>
//     </div>
//   )
// }

// export default Profile

// 15
// (1) updating password
// (2) setting the userIdname
// (3) using user and setUser from context