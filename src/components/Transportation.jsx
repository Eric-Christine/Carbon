import React, { useState, useEffect } from 'react'
import CarSelection from './CarSelection'



export default function Transportation() {



    const [currentState, functionThatUpdatesState] = useState({ milesDriven: 200, fuelPrice: 2.09, totalFuelCost: 0, milesPerGallon: 24, stateYearlyFuelCost: 0, tenYearFuelCosts: 0, tenYearFuelCostPlusCar: 0 })



    const milesDriven = currentState.milesDriven
    const milesPerGallon = currentState.milesPerGallon
    const fuelPrice = currentState.fuelPrice
    const stateYearlyFuelCost = currentState.stateYearlyFuelCost
    const tenYearFuelCosts = currentState.tenYearFuelCosts
    const tenYearFuelCostPlusCar = currentState.TenYearFuelCostPlusCar


    useEffect(() => {
        console.log('render')
        totalFuelCostPerWeek()
        totalFuelCostPerYear()
    }, [milesDriven, milesPerGallon, fuelPrice])



    function totalFuelCostPerWeek() {
        functionThatUpdatesState(
            previousState => {
                return {
                    ...previousState,
                    totalFuelCost:
                        Math.round((previousState.milesDriven / previousState.milesPerGallon) * previousState.fuelPrice * 100) / 100
                }
            }
        )
    }

    function totalFuelCostPerYear() {
        functionThatUpdatesState(
            previousState => {
                return {
                    ...previousState,
                    stateYearlyFuelCost:
                        parseFloat((previousState.totalFuelCost * 52).toFixed(2))
                }
            }
        )
    }



    function subtractMPG() {
        functionThatUpdatesState(
            previousState => {
                return { ...previousState, milesPerGallon: previousState.milesPerGallon - 1 }
            }
        )
    }
    function addMPG() {
        functionThatUpdatesState(
            previousState => {
                return { ...previousState, milesPerGallon: previousState.milesPerGallon + 1 }
            }
        )
    }
    function increaseGasPrice() {
        functionThatUpdatesState(
            previousState => {
                return { ...previousState, fuelPrice: previousState.fuelPrice - .01 }
            }
        )
    }
    function decreaseGasPrice() {
        functionThatUpdatesState(
            previousState => {
                return { ...previousState, fuelPrice: previousState.fuelPrice + .01 }
            }
        )
    }

    function subtractMilesDriven() {
        functionThatUpdatesState(
            previousState => {
                return { ...previousState, milesDriven: previousState.milesDriven - 10 }
            }
        )
    }

    function addMilesDriven() {
        functionThatUpdatesState(
            previousState => {
                return { ...previousState, milesDriven: previousState.milesDriven + 10 }
            })
    }

    const weeklyFuelCost = (currentState.totalFuelCost).toFixed(2)
    const dailyFuelCost = (weeklyFuelCost / 7).toFixed(2)
    const monthlyFuelCost = (currentState.totalFuelCost * 4.5).toFixed(2)
    const yearlyFuelCost = (currentState.stateYearlyFuelCost).toFixed(2)
    const fiveYearFuelCost = (yearlyFuelCost * 5).toFixed(2)
    const tenYearFuelCost = parseFloat((currentState.stateYearlyFuelCost * 10).toFixed(2))


    console.log(yearlyFuelCost, 'yearly', dailyFuelCost, 'dail', fiveYearFuelCost, 'five year', console.log())

    return (
        <div class="flex-column center">
            <div class="card center">
                <button id="fuelCost" onClick={totalFuelCostPerWeek}>Calculate fuel costs</button>
                <div className="transport-section">
                    <h3>On average, how many miles / week do you drive?</h3>
                </div>
                <div className="transport-section">
                    <div class="flex-column center">
                        <span class="userInput"> {currentState.milesDriven} miles per week </span>
                    </div>
                    <div className="flex-row center">
                        <button onClick={subtractMilesDriven}>-</button>
                        <button onClick={addMilesDriven}>+</button>
                    </div>
                    <h3>What is your car's combined fuel economy?</h3>
                    <div class="flex-column center">
                        <span class="userInput"> {currentState.milesPerGallon} MPG </span>
                    </div>
                    <div className="flex-row center">
                        <button onClick={subtractMPG}>-</button>
                        <button onClick={addMPG}>+</button>
                    </div>
                    <h3>What is the price of gas in your area?</h3>
                    <div class="flex-column center">
                        <span class="userInput"> ${(currentState.fuelPrice).toFixed(2)} </span>
                    </div>
                    <div className="flex-row center">
                        <button onClick={increaseGasPrice}>-</button>
                        <button onClick={decreaseGasPrice}>+</button>
                    </div>
                </div>
                <div>
                    <p> <span className="bold">Weekly </span> fuel cost: <span class="bold">${weeklyFuelCost}</span></p>
                    <p> <span className="bold">Monthly</span>  fuel cost: <span class="bold">${monthlyFuelCost}</span></p>
                    <p> <span className="bold">Yearly </span>fuel cost: <span class="bold">${yearlyFuelCost}</span></p>
                    <p>
                        If you drive
                    <span className="bold"> {currentState.milesDriven}</span> miles per week in a car that gets
                    <span className="bold"> {currentState.milesPerGallon} MPG</span>
                    , you'll spend
                    <span className="bold"> ${currentState.totalFuelCost} </span>
                    each week, or
                    <span className="bold"> ${currentState.stateYearlyFuelCost} </span>
                    per year on gas alone.
                    </p>
                </div>
            </div>
            <CarSelection
                fuelPrice={parseFloat((fuelPrice).toFixed(2))}
                milesDriven={milesDriven}
                yearlyFuelCost={stateYearlyFuelCost}
                tenYearFuelCost={tenYearFuelCost}
            />
        </div>
    )
}
