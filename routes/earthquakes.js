const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

const url = 'http://www.koeri.boun.edu.tr/scripts/lst0.asp';

const getData = async () => {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    const earthquakesText = $('pre').html();
    return earthquakesText;
}

router.get('/', async (req, res) => {
    const data = await getData();
    console.log(data);
    res.json('hello world!');
});

module.exports = router;
