// app.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

require('dotenv').config();

const pipedriveApiToken = process.env.PIPEDRIVE_API_TOKEN;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));



app.get('/contacts', (req, res) => {
    axios.get(`https://Rian-Sandbox.pipedrive.com/v1/persons?api_token=${pipedriveApiToken}`)
        .then(response => {
            const contacts = response.data.data;
            res.json(contacts);
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Log the error
            res.status(500).json({ error: 'Error fetching data' });
        });
});

