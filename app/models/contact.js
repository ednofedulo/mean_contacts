var mongoose = require('mongoose');

module.exports = mongoose.model('Contact', {
    name : String,
    lastname: String,
    email : String
});