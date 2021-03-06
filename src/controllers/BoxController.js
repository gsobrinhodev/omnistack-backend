const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        const box = await Box.create( req.body );
        // const box = await Box.create({ req.body.title }); // Quando se tem somente o title
        // const box = await Box.create({ title: req.body.title });
        return res.json(box);
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate("files");
        
        return res.json(box);
    }
}

module.exports = new BoxController();