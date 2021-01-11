var mongoose = require('mongoose');

var querySchema = mongoose.Schema({
    sender: {type: String},
    rec: {type: String},
    subject: {type: String},
    message: {type:String}
});

module.exports=mongoose.model('query', querySchema);