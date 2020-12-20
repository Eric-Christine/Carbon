import React, { Component, useState } from 'react'
import Introduction from './Introduction'
import Energy from './Energy'
import Navbar from './Navbar'
import Resources from './Resources'
import Footer from './Footer'
import HooksPractice from './Transportation'
import Transportation from './Transportation'
import CarSelection from './CarSelection'


export default class HomePage extends Component {


    state = {
        co2Logs: [23, 45, 745],
        gasPriceData: []
    }

    componentDidMount() {
        let objectData = null
        var http = require("https");

        var options = {
            "method": "GET",
            "hostname": "api.collectapi.com",
            "port": null,
            "path": "/gasPrice/stateUsaPrice?state=WA",
            "headers": {
                "content-type": "application/json",
                "authorization": "apikey 0OT8pe9kBS8gA3s801Kk9y:5y13KBOFuBdpdF0zaAMO25"
            }
        };

        var req = http.request(options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function parseData() {
                var body = Buffer.concat(chunks);
                const fetch = body.toString()

                objectData = JSON.parse(fetch)
                return console.log(objectData)

            });
        });
        this.setState({ gasPriceData: objectData })
        req.end();
    }

    render() {
        return (
            <div class="MainContainer">
                {/* <Navbar /> */}
                <Introduction />
                <Transportation />
                {/* <CarSelection /> */}
                {/* <Energy carbonLog={this.state.co2Logs} /> */}
                {/* <Resources />
                <Footer /> */}
            </div >
        )
    }
}
