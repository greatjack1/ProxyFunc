var http = require('http');
var httpProxy = require('http-proxy');
const url = require('url');

const options = {
    "changeOrigin": true
}
var proxy = httpProxy.createProxyServer(options);

http.createServer(function (req, res) {
    try {
        const queryObject = url.parse(req.url, true).query;
        console.log(queryObject)
        const reqUrl = queryObject.auth
        console.log(reqUrl)
        proxy.web(req, res, { target: reqUrl });
    } catch (err) {
        console.log(err)
    }

}).listen(80);
