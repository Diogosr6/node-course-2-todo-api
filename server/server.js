var mongoose = require('mongoose');

//Indica ao mongoose que queremos usar Promises (then) em vez de callbacks
mongoose.Promise = global.Promise;

//Gere a conexao a base de dados
mongoose.connect('mongodb://localhost:27017/TodoApp');

//Modelo de dados para os Todos
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

//Modelo de dados para os Users
var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser = new User({
    name: 'Zé Manel',
    email: 'zemanel@cenas.com'
});

newUser.save().then( (doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to save user', err);
});

/* var newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (err) => {
    console.log('Unable to save todo');
}); */

/* var otherTodo = new Todo({
    text: '   Shop dishes    ',
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to save other todo', err);
}); */
