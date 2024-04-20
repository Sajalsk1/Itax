const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint to search by PAN
router.get('/searchByPAN/:pan', async (req, res) => {
  try {
    const pan = req.params.pan;
    const response = await axios.get(`https://<domain-name>/commonapi/v1.0/fip/searchbypan?pan=${pan}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error form pan' });
  }
});

module.exports = router;
