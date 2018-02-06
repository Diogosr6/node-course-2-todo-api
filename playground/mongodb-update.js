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

    /*     db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a79c72f09b4ec56a2ad00af')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    }); */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a789d65de954039a4d077b5')
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: 'Diogo'
        }
    }, {
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });

    // client.close();
});