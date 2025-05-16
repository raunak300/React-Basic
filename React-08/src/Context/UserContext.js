//context is purely a js file
//there can be multiple context

import React, { createContext }  from "react"; 
// const UserContext = React.createContext();

// export default UserContext;

//changed to
const UserContext = createContext(null);
export default UserContext;


//-----------------------------------
//in UseContext.js
//1
// {
//     import React from "react"; 
// const UserContext = React.createContext();


// export default UserContext;
// }


//2
//context gives provider ,that works like this
// <USERContext>  Wrapper....  </USERContext>   in here we can put other jsx file etc and wrap it inside
//--------------------------------------------------
//in useContextProvider.jsx
//3 created this 
// import React from 'react'
// import UserContext from './UserContext'

// const UserContextProvider = ({childern}) => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default UserContextProvider;


//4 children is a generic name only that carry things like content elements or text

//5    example to show how it looks --works
{/* <UserContextProvider>
  <SomeComponent />
</UserContextProvider>
Then <SomeComponent /> becomes the children of the UserContextProvider. */}


//6   we did this wrapping thing and now we need to pass in some data as well to work with means FOR EHICH CONTEXT NEED TO BE PROVIDED  that is shown in 7
// import React from 'react'
// import UserContext from './UserContext'

// const UserContextProvider = ({children}) => {
//   return (
//    <UserContext.Provider>
//     {children}
//    </UserContext.Provider>
//   )
// }

// export default UserContextProvider;


//7
//in here we can see we are passing the data as prop in here means to provide any context to that for further use
// import React from 'react'
// import UserContext from './UserContext'

// const UserContextProvider = ({children}) => {
//     const [user, setUser] = React.useState(null)
//   return (
//    <UserContext.Provider value={{user,setUser}} >
//     {children}
//    </UserContext.Provider>
//   )
// }

// export default UserContextProvider;

//8 
//for now we are done with store and things
//but how are we going to access this store thing
//could be done in app.jsx or main.jsx


// import { useState } from 'react'

// import './App.css'
// import UserContextProvider from './Context/UserContextProvider'

// function App() {
//   <UserContextProvider>
    
//   </UserContextProvider>
// }
// export default App

