import React from 'react'
import EVs from './subComponents/EVs'
import Hatchbacks from './subComponents/Hatchbacks'
import Sedans from './subComponents/Sedans'
import SUVs from './subComponents/SUVs'

export default function CarSelection(props) {


    return (
        <div class="CarSelection">
            <div className="CardContainer">
                <h1>Sedans</h1>
                <Sedans
                    fuelPrice={props.fuelPrice}
                    milesDriven={props.milesDriven}
                    tenYearFuelCost={props.tenYearFuelCost}
                />
                <h1>Hatchbacks</h1>
                <Hatchbacks
                    fuelPrice={props.fuelPrice}
                    milesDriven={props.milesDriven}
                    tenYearFuelCost={props.tenYearFuelCost} />
                <h1>SUVs</h1>
                <SUVs
                    fuelPrice={props.fuelPrice}
                    milesDriven={props.milesDriven}
                    tenYearFuelCost={props.tenYearFuelCost} />
                <h1>EVs</h1>
                <EVs
                    fuelPrice={props.fuelPrice}
                    milesDriven={props.milesDriven}
                    tenYearFuelCost={props.tenYearFuelCost} />
            </div>
        </div>
    )
}
