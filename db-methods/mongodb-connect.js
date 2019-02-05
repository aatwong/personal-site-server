const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Feedback', { useNewUrlParser: true }, (err, client) => { // this is where the hosted db url is. after last slash, you specify database
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('Feedback');
    db.collection('Messages').insertOne({
        text: 'someone elses feedback 2',
        timestamp: Date.now()
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert message', err);
        }
        // console.log(JSON.stringify(result.ops, undefined, 2))
    });

    client.close();
}); 