import React from "react";
import { useId } from "react";
function InputBox({
    label, // this is fro From and To thing that  will be passed by the user only
    amount,
    onAmountchange,
    onCurrencychange,
    currenyOptions=[],
    selectCurrency="usd",
    className = "",
    amountDiable=false,
    currencydisable=false,
}) {
    const amountInputId=useId();
    //used for increasing feature and better page rendring and reducing pressure over stack,{generates unique id and used in server side rendring}
    //must not be used in loops and for key in map
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}> 
        {/* css= written in js format for javaScript thing in here */}
            <div className="w-1/2">
                <label htmlFor={amountInputId}   className="text-black/40 mb-2 inline-block">
                {/* //htmlFor helps in using amountId and id must be set based on this only */}
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDiable}
                    value={amount}
                    onChange={(e)=>{onAmountchange && onAmountchange(Number(e.target.value))}}
                    //it will first check if it exist and if there is this  function it will put into that function
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>{
                        onCurrencychange && onCurrencychange(e.target.value) 
                    }}
                >
                       {
                        currenyOptions.map((currency)=>(
                            <option 
                            key={currency  }  //to handel performance while using loop (key is used)
                            value={currency}>
                                {currency}
                            </option>
                        ))
                       }

                </select>
            </div>
        </div>
    );
}

export default InputBox;


