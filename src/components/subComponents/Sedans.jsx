
import React, { useState, useEffect } from 'react'

export default function Sedans(props) {


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
                <h3>2020 Honda Accord</h3>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-oBfy9TpXBHod5hFuRqjLlD5NqiC5Po6mel2QJfD7nEhRbl5Y" alt="" />
                <h4>MPG: 34</h4>
                <h4>PRICE: $24,270</h4>
                <h4>YOUR FUEL COSTS(/YR): ${(yearlyFuelCostBeforeMPG / 34).toFixed(2)} </h4>
                <h4>OVER 10 YRS (TOTAL): ${(24270 + (yearlyFuelCostBeforeMPG * 10 / 34)).toFixed(2)} </h4>
            </div>
            <div className="CarCard">
                <h3>2020 Toyota Camry</h3>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTepD-WTp8V33pBAdappVEPDbpgaJhf-4phcYjQX_KLBcvlGpvi" alt="" />
                <h4>MPG: 35 </h4>
                <h4>PRICE:  $24,425</h4>
                <h4>YOUR FUEL COSTS(/YR): ${(yearlyFuelCostBeforeMPG / 35).toFixed(2)} </h4>
                <h4>OVER 10 YRS (TOTAL): ${(24425 + (yearlyFuelCostBeforeMPG * 10 / 35)).toFixed(2)} </h4>
            </div>
            <div className="CarCard">
                <h3>2020 Hyndai Sonata</h3>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSHLIYXYr7q4vX6Bz4H6pIbXM-0z2H99vGbE553_q180o6Ai9q" alt="" />
                <h4>MPG: 33 </h4>
                <h4>PRICE: $23,600 </h4>
                <h4>YOUR FUEL COSTS(/YR): ${(yearlyFuelCostBeforeMPG / 33).toFixed(2)} </h4>
                <h4>OVER 10 YRS (TOTAL): ${(23625 + (yearlyFuelCostBeforeMPG * 10 / 33)).toFixed(2)} </h4>
            </div>
        </div>
    )
}
