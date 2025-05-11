import React, { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

const App = () => {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef=useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%&"
    for (let i = 0; i < length; i++) {
      let randomWord = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomWord);

    }
    setpassword(pass);

  }, [length, numberAllowed, charAllowed, setpassword]);


     useEffect(()=>{passwordGenerator()},
      [length,charAllowed,numberAllowed])
  
  const copyPasswordToClipboard=()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
    //alert("copied to clipboard")
  }
  return (
    <>
      <div className="bg-zinc-900 min-h-screen flex flex-col items-center justify-start py-10 px-4">
        <h1 className="text-4xl text-center text-white font-bold mb-8">
          Password Generator
        </h1>
        <div className="flex items-start justify-center w-3/5 bg-zinc-700 rounded-md p-6 gap-6">
          <div className="flex-1">

            <input
              type="text"
              value={password}
              placeholder="Password"
              ref={passwordRef}
              onChange={passwordGenerator}
              className="w-full p-3 bg-zinc-800 text-white rounded-md text-lg outline-none"
            />
            <div className="flex flex-col gap-4">
              <button
                onClick={passwordGenerator}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Generate
              </button>
               <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={copyPasswordToClipboard}
              >
                Copy
              </button>
              <div>
                <input type="checkbox" name='number'
                  onChange={() => setnumberAllowed((prev) => !prev)}
                  className="accent-blue-500" 
                  checked={numberAllowed} />
                <label htmlFor="number">Number</label>
              </div>
              <div>
                <input type="checkbox" name='Character' 
                checked={charAllowed}
                  onChange={() => setcharAllowed((prev) => !prev)}
                  className="accent-blue-500" />
                <label htmlFor="Character">Character</label>
              </div>
              <div className="flex items-center text-white gap-2">
                <label htmlFor="length" className="whitespace-nowrap">Length:</label>
                <input
                  type="range"
                  id="length"
                  min="6"
                  max="36"
                  value={length}
                  onChange={(e) => setlength(Number(e.target.value))}
                  className="w-20 p-1 bg-zinc-800 text-white rounded-md outline-none"
                />
                {length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App