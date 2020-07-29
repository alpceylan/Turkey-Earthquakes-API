const express = require('express');
const router = express.Router();

// Services
const EarthquakeService = require('../services/earthquake_service');

// Helpers
const oneDayHelper = require('../helpers/one_day_helper');
const zeroHelper = require('../helpers/zero_helper');

router.get('/', async (req, res) => {
    try {
        const data = await EarthquakeService.getData();
        res.json(data);
    } catch (err) {
        res.json(err);
    }
});

router.get('/last-24-hours', async (req, res) => {
    try {
        const data = await EarthquakeService.getData();
        const earthquakeList = [];
        const date = new Date();
        const dateArgument = `${date.getFullYear()}.${zeroHelper(date.getMonth() + 1)}${date.getMonth() + 1}.${zeroHelper(date.getUTCDate())}${date.getUTCDate()}`;
        const timeArgument = `${zeroHelper(date.getHours())}${date.getHours()}:${zeroHelper(date.getMinutes())}${date.getMinutes()}:${zeroHelper(date.getSeconds())}${date.getSeconds()}`;
        data.forEach((earthquake) => {
            if (oneDayHelper(earthquake.date, earthquake.hour, dateArgument, timeArgument)) {
                earthquakeList.push(earthquake);
            }
        });
        res.json(earthquakeList);
    } catch (err) {
        res.json(err);
    }
});

router.get('/by-date/:date', async (req, res) => {
    try {
        const newData = [];

        const data = await EarthquakeService.getData();
        const year = req.params.date.substring(0, 4);
        const month = req.params.date.substring(4, 6);
        const day = req.params.date.substring(6, 9);

        const date = `${year}.${month}.${day}`;
        data.forEach((item) => {
            if(item.date == date) {
                newData.push(item);
            }
        });
        if (newData.length > 0) {
            res.json(newData);
        } else {
            res.json('There is no data with this date');
        }
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;
