import { useState } from 'react'
import ConvertBtn from './components/ConvertBtn'
import ConvertInputBox from './components/ConvertInputBox'
import ConvertOutputBox from './components/ConvertOutputBox'
import './App.css'

function App() {
  const [amount, setAmount] = useState(100);
  const [toCurrency, setToCurrency] = useState('INR');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState();
  const handleSwap = () => {
    setAmount(0)
    setConvertedAmount(0)
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };


  return (
    <>
      <div id='maindiv-bg' className='bg-zinc-900 h-[100vh] w-full'>
        <h1 className="text-white text-4xl text-center p-5">Currency converter</h1>
        <div className='flex items-center justify-center pt-30'>
          <div id="whole-box" className='bg-zinc-800 opacity-50 text-white rounded-md grid grid-cols-1 h-1/3 w-1/2 gap-5 p-3'>
            <div id="crrency-box" className="flex flex-col items-center  gap-2 opacity-100">
              <ConvertInputBox
                amount={amount}
                setAmount={setAmount}
                fromCurrency={fromCurrency}
                setFromCurrency={setFromCurrency}
              />
              <button
                className=" bg-black w-1/5 text-white rounded-md "
                onClick={handleSwap}
              >
                swap
              </button>
              <ConvertOutputBox
                convertedAmount={convertedAmount}
                toCurrency={toCurrency}
              />
            </div>
            <div id="convert-btn" className='flex items-center justify-center'>
              <ConvertBtn
                amount={amount}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                setConvertedAmount={setConvertedAmount}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
