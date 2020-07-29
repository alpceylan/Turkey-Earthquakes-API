const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

const url = 'http://www.koeri.boun.edu.tr/scripts/lst0.asp';

async function getData() {
    return 'deneme';
}

router.get('/', async (req, res) => {
    const data = await getData();
    console.log(data);
    res.json('hello world!');
});

module.exports = router;
