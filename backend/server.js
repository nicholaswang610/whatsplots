const express = require('express');
const axios = require('axios');
require('dotenv').config();
const PORT = 3001;

const app = express();

app.get('/api', (req, res)=>{
    let search = 'query=restaurants in cerritos';
    let key = 'key=' + process.env.API_KEY;

    let query = search + '&' + key;
    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?' + query).then(async(response)=> {
        let data = response.data;
        console.log(query);
        res.send({response: data});
    });
    
});

app.listen(PORT, () => {console.log('server started on port ' + PORT)});

// Bundle when ready to deploy