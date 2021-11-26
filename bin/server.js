const app = require('../app');
const port = normalizaPort(process.env.PORT || '21120');

function normalizaPort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port))
        return val;

    if (port >= 0)
        return port;

    return false;
}

var server = app.listen(port, function () {
    console.log(`App listening on port ${port}`)
})

server.timeout = 300000;