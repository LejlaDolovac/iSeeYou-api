let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let seenThisSchema = new Schema({
    id: String,
    name: String,
});

let seenThisCeleb = mongoose.model('seenThisCeleb', seenThisSchema);

module.exports = seenThisCeleb;