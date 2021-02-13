import React, { useState, useEffect } from 'react'

export default function EVs(props) {

    const [currentState, functionThatUpdatesState] = useState({ totalTenYearCost: 1 })
    let milesDrivenPerYear = props.milesDriven * 52
    let yearlyFuelCostBeforeMPG = parseFloat((milesDrivenPerYear * props.fuelPrice).toFixed(2))
    const tenYearFuelCost = props.tenYearFuelCost


    useEffect(() => {
        console.log('render')
        fuelCostPlusCarCost()
    }, [tenYearFuelCost])

    function fuelCostPlusCarCost(props) {
        functionThatUpdatesState(
            previousState => {
                return {
                    ...previousState,
                    totalTenYearCost:
                        previousState.totalTenYearCost * tenYearFuelCost
                }
            }
        )
    }

    return (
        <div className="CardContainer">
            <div className="CarCard">
                <h3>2020 Tesla Model 3</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3fhJS-iuT6JB-6_mh7kcNiek5oMTZ53iG7H5oLBE-ov7wjQp" alt="" />
                <h4>MPGe: 131</h4>
                <h4>PRICE: $35,000</h4>
                <h4>YOUR FUEL COSTS(/YR): </h4>
                <h4>OVER 10 YRS (TOTAL): </h4>
            </div>
            <div className="CarCard">
                <h3>2020 Chevy Bolt</h3>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlP7MgCFnp07bXakINHvBS3GovcMkG0f1NJHBlH3iR-szz9LzS" alt="" />
                <h4>MPGe: 118 </h4>
                <h4>PRICE:  $36,620</h4>
                <h4>YOUR FUEL COSTS(/YR): </h4>
                <h4>OVER 10 YRS (TOTAL): </h4>
            </div>
            <div className="CarCard">
                <h3>2020 Nissan Leaf</h3>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwW9hWDYK7DB3AdP_SN0bSFkr8DrWFD2_hiCBqfZXddnhflm7L" alt="" />
                <h4>MPGe: 111 </h4>
                <h4>PRICE: $31,600 </h4>
                <h4>YOUR FUEL COSTS(/YR): </h4>
                <h4>OVER 10 YRS (TOTAL): </h4>
            </div>
        </div>
    )
}
