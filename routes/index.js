const insert = require('../controller/insertController');
module.exports = (router, app) => {
    router.route('/millisec')
        .post((req, res) => {
            insert.insertion(req, res, (data) => {
                res.send(data);
            })
        })
    router.route('/')
        .get((req, res) => {
            var data = "Server Is Started."
            res.send(data);
        })
}