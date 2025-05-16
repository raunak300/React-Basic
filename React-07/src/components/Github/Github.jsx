import React from 'react'
import { useEffect,useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState([])
    //  useEffect(()=>{
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then(res=>
    //         res.json()
    //     ).then(data=>
        
    //         setData(data)
    //     )
    // },[]);
    const data=useLoaderData();

  return (
    <div className=' pt-4 bg-gray-900 text-white h-[50vh]  ' >
        github followers: {data.followers}
    </div>
  )
}

export default Github



export const callApi=async()=>{

    const res=await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return await res.json() ;
}