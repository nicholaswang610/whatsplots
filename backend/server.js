const express = require('express');
const axios = require('axios');
require('dotenv').config();
const PORT = 3001;

const app = express();
app.use(express.json());

app.post('/api/locationdata', (req, res)=>{
    console.log(req.body);
    let search = 'query=' + req.body.location
    let key = 'key=' + process.env.API_KEY;
    let query = search + '&' + key;
    console.log('api call made');
    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?' + query).then(response=> {
        let data = response.data.results;
        res.send({response: data});
    });
    
});

app.post('/api/picture', (req,res) => {
    let reference = 'photoreference=' + req.body.photoReference;
    let maxwidth = 'maxwidth=1600';
    let key = 'key=' + process.env.API_KEY;
    let query = maxwidth + '&' + reference + '&' + key;

    console.log('api call made');
    axios.get('https://maps.googleapis.com/maps/api/place/photo?' + query, {responseType: 'arraybuffer'}).then(response => {
        let encodedString = Buffer.from(response.data).toString('base64');
        res.send({response: encodedString});
    })
});

app.listen(PORT, () => {console.log('server started on port ' + PORT)});

// Bundle when ready to deploy