const mongoose = require('mongoose');

//Creates a local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Exports connection4
module.exports = mongoose.connection;