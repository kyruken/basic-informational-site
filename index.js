const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact':
            path += 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    console.log(path);

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.end(data);
        }
    })
    

}).listen(3000);