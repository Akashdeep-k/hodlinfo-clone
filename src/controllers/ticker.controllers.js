const pool = require("../db.js");
const axios = require("axios");

// Fetch data from the WazirX API with a limit of 10 results
const fetchTickerData = async (req, res) => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const tickers = response.data;

        const dataToReturn = [];

        // Insert the top 10 results into the PostgreSQL database and store in dataToReturn
        const symbolsToFetch = Object.keys(tickers).slice(0, 10); // Get the first 10 symbols
        for (const symbol of symbolsToFetch) {
            const ticker = tickers[symbol];
            await pool.query(
                'INSERT INTO ticker_data (name, last, buy, sell, volume, base_unit) VALUES ($1, $2, $3, $4, $5, $6)',
                [ticker.name, parseFloat(ticker.last), parseFloat(ticker.buy), parseFloat(ticker.sell), parseFloat(ticker.volume), ticker.base_unit]
            );

            dataToReturn.push({
                name: ticker.name,
                last: parseFloat(ticker.last),
                buy: parseFloat(ticker.buy),
                sell: parseFloat(ticker.sell),
                volume: parseFloat(ticker.volume),
                base_unit: ticker.base_unit,
            });
        }

        console.log('Data inserted successfully.');
        res.send(dataToReturn);
    } catch (error) {
        console.error('Error fetching or inserting data:', error.message);
        throw error;
    }
};


module.exports = { fetchTickerData };