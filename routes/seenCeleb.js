let SeenThisCeleb = require('../models/seenThisCeleb');
let Celeb = require('../models/celeb');

module.exports.post = async(req, res) => {

    try {       
        let haveSeen = await Celeb.findById(req.body._id);
        let seenCeleb = [];        
        let payload = {
            id: haveSeen._id,
            name: haveSeen.name,
        }
        seenCeleb.push(payload);

        let resp = await SeenThisCeleb.create(seenCeleb);
        res.status(200).send(resp);
    } catch (err) {
        res.status(500).send(err.stack);
    }
};

module.exports.get = async(req, res) => {
    try {
        let haveSeen = await SeenThisCeleb.find({});
        res.status(200).send(haveSeen);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports.delete = async (req, res) => {
    
    try {
        res.status(200).send( await SeenThisCeleb.findOneAndDelete({id: req.params.id}));
    } catch(err) {
        res.status(404).send(err.stack);
    }
};
