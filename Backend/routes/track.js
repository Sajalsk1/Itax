const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint to track GSTIN returns
router.get('/trackGSTINReturns/:gstin', async (req, res) => {
  try {
    const gstin = req.params.gstin;

    // Make a GET request to the external API to track GSTIN returns
    const response = await axios.get(`https://<domain-name>/commonapi/v1.0/returns?gstin=${gstin}`);

    // Handle the response data or perform additional processing as needed
    const trackedData = response.data;

    res.json(trackedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error for tracking return' });
  }
});

module.exports = router;
