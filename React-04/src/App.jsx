import React from 'react'
import './App.css'
import { useCallback } from 'react'
const App = () => {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator=useCallback(fn,[])
  return (
    <>
    <h1 className='text-white text-2xl text-center'>
      Password Generator
    </h1>
    </>
  )
}

export default App