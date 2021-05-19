const mongoose = require('mongoose')

const connect = async function(){
    const options={useNewUrlParser: true, useUnifiedTopology: true}
    mongoose.connect('mongodb://localhost/market', options);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    // we're connected!
    });
}

module.exports = connect