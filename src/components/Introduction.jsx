import React from 'react'

export default function Introduction() {
    return (
        <div class="card">
            <h3>Description</h3>
            <p>Calculate fuel costs to make your most efficient car purchase!</p>
            <section >
                <div>
                    <h3>Where do our emissions come from?</h3>
                    <p>
                        Total US GHG Emissions by Economic Sector in 2018
                    </p>
                    <ul>
                        <li>28% Transportation</li>
                        <li>27% Electricity</li>
                        <li>22% Industry</li>
                        <li>12% Comercial / Residential</li>
                        <li>10% Agriculture</li>
                    </ul>
                </div>
            </section>
            {/* <div className="EPA_Images">
                <img src="https://www.epa.gov/sites/production/files/styles/medium/public/2016-05/global_emissions_gas_2015.png"></img>
                <img src="https://www.epa.gov/sites/production/files/styles/medium/public/2020-04/total-ghg-2020.jpg" alt="" />
            </div> */}
        </div>
    )
}
