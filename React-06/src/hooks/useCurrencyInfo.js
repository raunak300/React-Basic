//custom hook must be in .js

import { useState, useEffect } from "react";

function useCurrencyInfo (currency){
    const [data, setData] = useState({}) //empty  obj if there is no fetch or there is problem will handel things instead
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) //fetch the api
        .then((res)=>
            res.json() //on fetch chnage the string data to json fromat can use parse as (JSON.parse(jsonString);)
        ).then((res)=> // this is used for storing now 
            setData(res[currency])   // this places the "usd"/"inr" in place to it 
            //  here we don't use res.currency in here bcoz currency holds some value and we need to useinr,etc hold by it



        )
    },[currency]) //whenver there is a change in currency i want to run this dependency i want to run this
    return data;
}

export default useCurrencyInfo;