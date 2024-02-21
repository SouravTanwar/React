import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/SouravTanwar")
    //     .then(response => response.json())
    //     .then(data=> {setData(data)})
    // },[])

    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github id: {data.id}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

//using loader method so that it can load as soon as we hover on the github link and store it in catch it is faster than the above used ueEffect hook
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SouravTanwar')
    return response.json()
}