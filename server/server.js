var server = require('json-server');

server.low.db = {
    users: ['nir','ran','or','aviv']
};

server.listen(3000, function () {
    console.log('=======> API server listen on port 3000');
});