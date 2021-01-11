var mongoose = require('mongoose');

var recordingSchema = mongoose.Schema({
    subject:{type:String},
    lecture:{type:String},
    faculty:{type:String},
    ldate:{type:Date},
    ytlink:{type:String}
});

module.exports=mongoose.model('recording', recordingSchema);