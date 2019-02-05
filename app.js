const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db-methods/mongoose');
const {Message} = require('./models/message');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req, res){
    res.send('<h1>Server is up!</h1>');
});  


app.get('/info', function(req, res){
    response = {
        info: 'server handshake'
    }
    console.log('client handshake');
    res.send(response);
});

app.post('/feedback', (req, res) => {
    console.log(req.body.message);
    var message = new Message({
        'text': req.body.message,
        'timestamp': Date.now(),
        'read': false
    });
    message.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number, () => {  // to run server, "node app.js"
    console.log('Server started');
});