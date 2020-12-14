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

    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?' + query).then(response=> {
        console.log(response.data.results);
        let data = response.data.results;
        res.send({response: data});
    });
    
});

app.listen(PORT, () => {console.log('server started on port ' + PORT)});

// Bundle when ready to deploy