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

    /*     db.collection('Todos').find({completed: false}).toArray().then( (docs) => {
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    }); */

    //A propriedade _id é um objecto, daí para a usarmos como filtro
    //temos que criar um novo objectID
    /*     db.collection('Todos').find({
        _id: new ObjectID('5a799ad109b4ec56a2acf612')
    }).toArray().then( (docs) => {
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    }); */

    /* 
    db.collection('Todos').find().count().then( (count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to count todos', err);
    }); */

    db.collection('Users').find({name: 'Diogo'}).toArray().then( (docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find users');
    });

    //client.close();
});