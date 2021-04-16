import React, {useState}from 'react'
import {DonorCard, Search} from '../components'
import {useContent} from '../hooks'

export default function Home() {
    const [city,setCity] =  useState('');
    const {donor}= useContent('donor',city)
    console.log(donor)
    return (
       <>
            <Search setFunction ={setCity} />
            {donor && donor.map((data)=>(
                <DonorCard
                    key={data.docId}
                    name={data.name}
                    city={data.city}
                    date={new Date(data.date?.toDate()).toUTCString()}
                    blood_group={data.blood_group}
                />
            ))}
            {
                donor.length===0 && (<h1>No donors</h1>)
            }
           
       </>
    )
}
