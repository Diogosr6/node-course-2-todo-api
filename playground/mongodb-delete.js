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

    //deleteMany
    /*     db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) => {
        console.log(result);
    }); */

    //deleteOne
    /*     db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
        console.log(result);
    }); */

    //findOneAndDelete
    /*     db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
        console.log(result);
    }); */

    db.collection('Users').deleteMany({name: 'Diogo'}).then( (result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a789f30f8ac3d479825ffe5')
    }).then( (result) => {
        console.log(result);
    });

    //client.close();
});