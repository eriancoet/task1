// app.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));


app.get('/contacts', (req, res) => {
    axios.get('https://Rian-Sandbox.pipedrive.com/v1/persons?api_token=744cc977d27294cfd65794cffe6a7c7238163209')
        .then(response => {
            const contacts = response.data.data;
            res.json(contacts);
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Log the error
            res.status(500).json({ error: 'Error fetching data' });
        });
});

