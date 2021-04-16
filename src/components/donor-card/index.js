import React from 'react'
import './donorCard.css'


export default function DonorCard(donor) {
    return (
        <div class="Card_Container">
            <div class="Left_Container">
                <h1>{donor.blood_group}</h1>
            </div>
        <div class="Middle_Container">
            <h4>Name: {donor.name}</h4>
            <h4>City: {donor.city}</h4>
            <h4>Tested-Negative: {donor.date} </h4>
        </div>   
        <div class="Right_Container">
            <h4>
            Get Details
            </h4>
        </div>         
        </div>
    )
}
