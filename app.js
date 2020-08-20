var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs');
    var html;

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
    try {

        if (req.url == "/") {
            html = fs.readFileSync('index.html');
        } else {
            console.log(`.${req.url}`);
            html = fs.readFileSync(`.${req.url}`);
        }
    } catch(e) {
        html = "File not found";
    }
    res.writeHead(200);
    res.write(html);
    res.end();
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
