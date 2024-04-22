// import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className=' text-2xl text-blue-800 py-40 text-center font-extrabold'>User: {userid}</div>
  )
}

export default User