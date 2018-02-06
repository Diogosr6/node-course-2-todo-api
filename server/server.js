var mongoose = require('mongoose');

//Indica ao mongoose que queremos usar Promises (then) em vez de callbacks
mongoose.Promise = global.Promise;

//Gere a conexao a base de dados
mongoose.connect('mongodb://localhost:27017/TodoApp');

//Modelo de dados para os Todos
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

/* var newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (err) => {
    console.log('Unable to save todo');
}); */

var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to save other todo', err);
});
