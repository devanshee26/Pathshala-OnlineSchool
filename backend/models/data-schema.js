var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    name: {type: String},
    semester: {type: Number},
    email:{type: String},
    mobile: {type:String},
    parentcontact: {type:String},
    caste: {type: String},
    religion:{type: String},
    bloodgrp : {type:String},
    rank:{type:Number},
    school:{type:String},
    socialCommittee:{type:String},
    techCommittee:{type:String},
    address:{type:String}
});

module.exports=mongoose.model('student', studentSchema);