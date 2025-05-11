import React, { useState } from 'react'

const Button = () => {
    const [counter, setCounter] = useState(0)
    
    function upFunc(){
        setCounter(e=>e+1);
    }
    function downFunc(){
        if(counter!=0){
            setCounter(e=>e-1);
        }
    }
  return (
    <div>
        <button onClick={upFunc}>
            Counter UP
        </button>
        <button onClick={downFunc}>
            Counter Down
        </button>
        <input type="text" value={counter} readOnly />
    </div>
  )
}

export default Button