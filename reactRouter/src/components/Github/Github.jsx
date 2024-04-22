// import React from 'react'

import { useEffect, useState } from "react"

function Github() {
  const[data, setData] = useState([])
  useEffect(() => {
      fetch('http://api.github.com/users/hiteshchoudhary')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, [])
  return (
    <div className=" flex flex-col text-xl font-bold text-orange-800 py-6 items-center">Github Followers: {data.followers}
    <img className="mt-2" src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github 