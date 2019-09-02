// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

let app = express();
app.use(express.json());
app.use(cors());

// CONNECTS TO DATABASE	
mongoose.connect(`mongodb+srv://admin:admin123@cluster0-ljuk8.mongodb.net/test?retryWrites=true&w=majority
`, { useNewUrlParser: true })	
    .then(() => {	
        console.info('Connected.')	;
    })	
    .catch(err => {	
        console.error(err)	;
    });

// ROUTES
let seenThisCeleb = require('./routes/seenCeleb');
let celeberty = require('./routes/celeberty');

app.route('/seenThisCeleb')
    .post(seenThisCeleb.post)
    .get(seenThisCeleb.get);

app.route('/seenThisCeleb/:id')
    .delete(seenThisCeleb.delete);

app.route('/celeberty/:id')
    .delete(celeberty.delete);

app.route('/celeberty')
    .post(celeberty.post)
    .get(celeberty.get);

app.listen(3000, () => {
    console.info('Server is running: 3000.');
});
