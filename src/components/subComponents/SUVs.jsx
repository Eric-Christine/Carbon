import React, { useState, useEffect } from 'react'


export default function SUVs(props) {
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
                <h3>2020 Subaru Outback</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CMVaAdFmP8NH7a5PImDeNNHQUOqlYoWGabmilLyfG4g6TjIu" alt="" />
                <h4>MPG: 29.5</h4>
                <h4>PRICE: $26,645</h4>
                <h4>YOUR FUEL COSTS(/YR): ${(yearlyFuelCostBeforeMPG / 29.5).toFixed(2)} </h4>
                <h4>OVER 10 YRS (TOTAL): ${(26645 + (yearlyFuelCostBeforeMPG * 10 / 29.5)).toFixed(2)}   </h4>
            </div>
            <div className="CarCard">
                <h3>2020 Hyndai Sante Fe</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmYwl6D7xiQcRblW9RlqlMwW9d-6VwxL77CvMR3B4JlLKmciN" alt="" />
                <h4>MPG: 25.5 </h4>
                <h4>PRICE: $26,275</h4>
                <h4>FUEL COSTS(/YR):${(yearlyFuelCostBeforeMPG / 25.5).toFixed(2)}  </h4>
                <h4>OVER 10 YRS (TOTAL): ${(26275 + (yearlyFuelCostBeforeMPG * 10 / 25.5)).toFixed(2)} </h4>
            </div>
            <div className="CarCard">
                <h3>2020 Jeep Grand Cherokee</h3>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSDyxUAEtLQCcb2l8sCdPURKqbbOdzwHAI7P8ysFfvEtYnC6Olz" alt="" />
                <h4>MPG: 31.5 </h4>
                <h4>PRICE: $23,600 </h4>
                <h4>FUEL COSTS(/YR): ${(yearlyFuelCostBeforeMPG / 31.5).toFixed(2)}</h4>
                <h4>OVER 10 YRS (TOTAL): ${(23600 + (yearlyFuelCostBeforeMPG * 10 / 31.5)).toFixed(2)}  </h4>
            </div>
        </div>
    )
}
