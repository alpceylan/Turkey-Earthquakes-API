const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

// Models
const Earthquake = require('../models/earthquake');

// Helpers
const oneDayHelper = require('../helpers/one_day_helper');
const zeroHelper = require('../helpers/zero_helper');

const url = 'http://www.koeri.boun.edu.tr/scripts/lst0.asp';

const earthquakes = [];

const getData = async () => {
    try {
        const res = await axios.get(url);
        const $ = cheerio.load(res.data);

        const earthquakesRes = $('pre').html();

        let earthquakeList = earthquakesRes.split("\n");
        earthquakeList.splice(0, 6);

        earthquakeList.forEach((earthquake) => {
            let earthquakeDetailList = earthquake.split(" ");
            const list = earthquakeDetailList.filter((item) => {
                return item != '' && item != '-.-';
            });
            if (list != []) {
                const date = list[0];
                const hour = list[1];
                const latitude = list[2];
                const longitude = list[3];
                const depth = list[4];
                const magnitude = list[5];

                if (date != undefined &&
                    hour != undefined &&
                    latitude != undefined &&
                    longitude != undefined &&
                    depth != undefined &&
                    magnitude != undefined
                ) {
                    const newEarthquake = new Earthquake(
                        date,
                        hour,
                        latitude,
                        longitude,
                        depth,
                        magnitude,
                    );

                    earthquakes.push(newEarthquake);
                }
            }
        });

        return earthquakes;
    } catch (err) {
        return 'error';
    }
}

router.get('/', async (req, res) => {
    const data = await getData();
    res.json(data);
});

router.get('/last-24-hours', async (req, res) => {
    const earthquakeList = [];
    const data = await getData();
    const date = new Date();
    const dateArgument = `${date.getFullYear()}.${zeroHelper(date.getMonth() + 1)}${date.getMonth() + 1}.${zeroHelper(date.getUTCDate())}${date.getUTCDate()}`;
    const timeArgument = `${zeroHelper(date.getHours())}${date.getHours()}:${zeroHelper(date.getMinutes())}${date.getMinutes()}:${zeroHelper(date.getSeconds())}${date.getSeconds()}`;
    data.forEach((earthquake) => {
        if (oneDayHelper(earthquake.date, earthquake.hour, dateArgument, timeArgument)) {
            earthquakeList.push(earthquake);
        }
    });
    res.json(earthquakeList);
});

module.exports = router;
