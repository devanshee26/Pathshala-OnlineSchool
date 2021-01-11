var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    name: {type: String},
    semester: {type: Number},
    alis: {type:String},
    credits:{type:Number},
    branch:{type:String},
    program:{type:String},
});

module.exports=mongoose.model('course', courseSchema);