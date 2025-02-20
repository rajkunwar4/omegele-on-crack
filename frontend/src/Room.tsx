import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

type Props = {}

const Room = (props: Props) => {

    const [searchParams, setSearchParams]= useSearchParams();
    const name = searchParams.get("name");


    useEffect(()=>{
        //logic to init user connection
    },[name])



  return (
    <div> hi {name} to Room</div>
  )
}

export default Room