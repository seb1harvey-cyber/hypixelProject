const express = require('express');
const port = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const replicaApp = process.env.REPLICA_APP || 'defaultApp';

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
        console.log(`Request served by ${replicaApp}`);
    });
app.listen(PORT, () => {
    console.log(`replicaApp "${replicaApp}" is running on port ${port}`);
});