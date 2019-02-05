const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Feedback', { useNewUrlParser: true }, (err, client) => { // this is where the hosted db url is. after last slash, you specify database
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('Feedback');

    // db.collection('Messages').find().toArray().then((docs) => {
    //     console.log('Messages');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch messages');
    // });

    db.collection('Messages').find().count().then((count) => {
        console.log(`Messages count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch messages');
    });

    client.close();
}); 