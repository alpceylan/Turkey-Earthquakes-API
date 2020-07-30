const axios = require('axios');
const cheerio = require('cheerio');

// Models
const Earthquake = require('../models/earthquake');

class EarthquakeService {
    static getData = async () => {
        const earthquakes = [];

        const url = 'http://www.koeri.boun.edu.tr/scripts/lst0.asp';

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
}

module.exports = EarthquakeService;