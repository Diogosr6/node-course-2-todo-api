var mongoose = require('mongoose');

//Indica ao mongoose que queremos usar Promises (then) em vez de callbacks
mongoose.Promise = global.Promise;

//Gere a conexao a base de dados
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};