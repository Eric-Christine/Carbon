import React from 'react'

export default function CalculateYourResult() {
    return (
        <div class="CalculateResult">
            <h4>Users will calculate their Carbon Footprint</h4>
            <form action="">
                <label htmlFor="milesDriven">Miles driven per year </label>
                <input id="milesDriven" type="text" placeholder="miles driven per year" />
                <br />
                <label htmlFor="milesDriven">Flights per year </label>
                <input id="milesDriven" type="text" placeholder="miles driven per year" />
                <br />
                <label htmlFor="milesDriven">lbs meat eaten per year</label>
                <input id="milesDriven" type="text" placeholder="miles driven per year" />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}
