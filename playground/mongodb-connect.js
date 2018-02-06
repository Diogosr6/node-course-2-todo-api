const {MongoClient, ObjectID} = require('mongodb');

//Same as up above
//const MongoClient = require('mongodb').MongoClient;

//Como criar novos Ids
//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');
    };

    var db = client.db('TodoApp');

    console.log('Connected to MongoDB server.');

/*     db.collection('Todos').insertOne({
        text: 'Something to do.',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        };
        
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

/*     db.collection('Users').insertOne({
        name: 'Diogo',
        age: 26,
        location: 'Somewhere'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        };
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    }); */

    client.close();
});