import React from 'react'
const Button =  ({ onClick, color, text, children, ...props })=> {
  return (
    
       <button 
       
       onClick={onClick}
       className={`px-6 py-3 rounded-md text-lg font-semibold`}
       style={{backgroundColor: color, color: text }}
       
       {...props}
       >
        {children}
       </button>
   
  )
}

export default Button