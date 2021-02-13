import React, { useState, useEffect } from 'react'

export default function Hatchbacks(props) {

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
                <h3>2020 Honda Civic Hatchback</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3fhJS-iuT6JB-6_mh7kcNiek5oMTZ53iG7H5oLBE-ov7wjQp" alt="" />
                <h4>MPG: 35.5</h4>
                <h4>PRICE: $21,750</h4>
                <h4>YOUR FUEL COSTS(/YR): ${(yearlyFuelCostBeforeMPG / 35.5).toFixed(2)} </h4>
                <h4>OVER 10 YRS (TOTAL): ${(21750 + (yearlyFuelCostBeforeMPG * 10 / 35.5)).toFixed(2)}</h4>
            </div>
            <div className="CarCard">
                <h3>2020 Volkswagen Golf</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0TEXxPiN18VHRlUrILTmb4x_c9Y_34-hlxuEBrfEC1GfYrE-" alt="" />
                <h4>MPG: 32 </h4>
                <h4>PRICE:  $23,195</h4>
                <h4>YOUR FUEL COSTS(/YR): ${(yearlyFuelCostBeforeMPG / 32).toFixed(2)}</h4>
                <h4>OVER 10 YRS (TOTAL): ${(23190 + (yearlyFuelCostBeforeMPG * 10 / 32)).toFixed(2)} </h4>
            </div>
            <div className="CarCard">
                <h3>2020 Mazda3 Hatchback</h3>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHzldqWuPy62W7O3-8lhrldO_D4WdfKM99mmLNOH3KJKQbPZRf" alt="" />
                <h4>MPG: 30.5 </h4>
                <h4>PRICE: $23,600 </h4>
                <h4>YOUR FUEL COSTS(/YR): ${(yearlyFuelCostBeforeMPG / 32).toFixed(2)} </h4>
                <h4>OVER 10 YRS (TOTAL): ${(23600 + (yearlyFuelCostBeforeMPG * 10 / 30.5)).toFixed(2)} </h4>
            </div>
        </div>
    )
}
