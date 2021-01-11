var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
    title:{type:String},
    bdate:{type:Date},
    bday:{type:String},
    author:{type:String},
    bcontent:{type:String}
});

module.exports=mongoose.model('blog', blogSchema);