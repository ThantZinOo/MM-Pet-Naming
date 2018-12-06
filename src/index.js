const Lottery = require('./lottery');
const bodyParser = require('body-parser');

const service = require('restana')({
    ignoreTrailingSlash: true
});

service.use(bodyParser.json());

service.get('/lottery', (req, res) => {
    Lottery.findAll().then((lottery) => {
        res.send(lottery);
    });
});

service.post('/lottery', async (req, res) => {
    Lottery.create({
        prizeSeq: req.body.prizeSeq,
        prizeTitle: req.body.prizeTitle,
        prizeNumber: req.body.prizeNumber,
    })
        .then((lottery) => {
            res.send(lottery);
        });
    // res.send(await Lottery.create(req.body.note));
});

service.delete('/lottery/:id', async (req, res) => {
    Lottery.findById(req.params.id)
        .then(lottery => lottery.destroy())
        .then(() => res.send());

    // res.send(await Lottery.destroy(req.params.id));
});

service.start(3000).then((server) => { });