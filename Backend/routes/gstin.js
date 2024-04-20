const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint to search by GSTIN
router.get('/searchByGSTIN/:gstin', async (req, res) => {
  try {
    const gstin = req.params.gstin;
    const response = await axios.get(`https://api-domain-name/commonapi/v1.3/search?gstin=${gstin}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error from gstin' });
  }
});

module.exports = router;
