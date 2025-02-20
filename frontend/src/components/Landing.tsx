import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


type Props = {}

const Landing = (props: Props) => {
    const [name,setName]= useState("");
   
   
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <Link to={`/room/?name=${name}`} >Join </Link>
    </div>
  )
}

export default Landing