var express = require('express');
const pg = require('pg');

var app = express();

app.use(express.static(__dirname + '/public')); 

var port = 8000; 
app.listen(port);

app.post('/api/data', function(req, res){

    const cs = 'postgres://postgres:123456@localhost:5432/lsef';
    const client = new pg.Client(cs);
    client.connect();

    const query = {
        text: 'SELECT * FROM Datatables'
    };
    client.query(query).then(result => { 
        res.json(result.rows)
    }).finally(() => {
        client.end()
    });
})

console.log('server on' + port);