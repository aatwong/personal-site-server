const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {  // to run server, "node app.js"
    console.log('Server started!');
});

app.get('/', function(req, res){
    res.send('<h1>Hello from Node</h1>');
});  


app.get('/info', function(req, res){
    response = {
        info: 'grapes'
    }
    console.log('grapes gotten');
    res.send(response);
});  

app.post('/feedbackMessage', function(req, res) {
    console.log('feedback received!');
    console.log(req);
    console.log(req.body);
    const responseBody = {
        res: 'got the message',
        payload: req.body
    }
    res.send(responseBody);
    res.end();
});