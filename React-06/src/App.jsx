import { useState } from 'react'
import { InputBox } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  //used to take uot all key-value pair from here

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-zinc-900 bg-cover bg-no-repeat"

    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); //prevents default browser behavior
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountchange={(value)=>setAmount(value)}
                currenyOptions={options}
                 onCurrencychange={(currency)=>setAmount(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currenyOptions={options}
                onCurrencychange={(currency)=>{
                  setTo(currency)
                }}
                selectCurrency={to}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {to} to {from}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
