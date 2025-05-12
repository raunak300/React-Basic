import React from 'react'

const ConvertInputBox = ({amount,setAmount,fromCurrency,setFromCurrency}) => {
  return (
    <div>
        <div className=' bg-white w-full flex flex-row justify-between gap-50 rounded-xl '>
            <div>
                <h2 className='text-black'>From</h2>
                <input type="text"  
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className='w-50 h-10 text-black rounded-2xl border-2 ' 
                />
                
            </div>
            <div>
                <h2 className='text-black'>Currency Type</h2>
                <input type="text"  
                value={fromCurrency}
                className='w-50 h-10 text-black rounded-2xl border-2 ' 
                
                />
                
            </div>
        </div>
    </div>
  )
}

export default ConvertInputBox