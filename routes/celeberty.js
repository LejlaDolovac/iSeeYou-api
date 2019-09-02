let Celeb = require('../models/celeb');


//GET
module.exports.get = async(req, res) => {
    try {
        let Celeberty = await Celeb.find({});
        res.status(200).send(Celeberty);
    } catch (err) {
        res.status(500).send(err);
    }
};

// POST
module.exports.post = async(req, res) => {
    try {
        let celeb = req.body;
        let resp = await Celeb.create(celeb);
        res.status(200).send(resp);
        
    } catch {
        resp.status(400).send(err);
    }
};

// DELETE
module.exports.delete = async (req, res) => {
    
    try {
        res.status(200).send( await Celeb.findOneAndDelete({_id: req.params.id}));
    } catch(err) {
        res.status(404).send(err.stack);
    }
};