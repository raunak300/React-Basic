import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
    console.log(userid)
  return (
    <div className='bg-gray-900 text-white h-[50vh] ' >
        User:{userid}
    </div>
  )
}

export default User