import React, { Component } from 'react'


export default function Energy(props) {

    const carbonAmount = props.carbonLog
    const averageTonsCo2EmittedPerDriver = 4.6

    function addEnergy() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return carbonAmount.reduce((reducer))
    }

    function carComparison() {
        return Math.round((addEnergy() / averageTonsCo2EmittedPerDriver))
    }


    return (
        <div class="Energy">
            <h2>You've saved {addEnergy()} tons of Co2 this year!</h2>
            <h3>That's enough carbon savings to offset {carComparison()} cars driving on the road for 1 year</h3>
        </div>
    )

}
