const { readFile } = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    readFile('./index.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send('Sorry. Server error.')
        }
        
        res.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log('App available at localhost:3000'));