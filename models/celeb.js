let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let celebSchema = new Schema({
    name: String
});

let Celeb = mongoose.model('celeb', celebSchema);

module.exports = Celeb;

