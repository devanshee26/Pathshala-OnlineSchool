var mongoose = require('mongoose');

var noticeSchema = mongoose.Schema({
    noticeTitle: {type: String},
    noticeDate: {type: Date},
    noticeContent: {type: String},
    authName: {type: String},
    authDesignation: {type: String}
    
});

module.exports=mongoose.model('notice', noticeSchema);