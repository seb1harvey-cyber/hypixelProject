const express = require('express');
const { readFile } = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
    readFile('index.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('Error reading file');
        }
        response.send(html);
        })

    });
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});