var http = require('http');     
var fs = require('fs');       
var url = require('url');       
var path = require('path');    

var fileExtensions = {
     ".html":    "text/html",
     ".css":     "text/css",
     ".js":      "text/javascript",
     ".jpg":     "image/jpeg",
     ".png":     "image/png",
     ".ico":     "image/x-icon"
 };

var server = http.createServer(function(request, response) { 
    var pathname = url.parse(request.url).pathname;
    var filename;
    if(pathname === "/") {
        filename = "homepage.html"; 
    }
    else
        filename = path.join(process.cwd(), pathname);

    try {
        fs.accessSync(filename, fs.F_OK);
        var fileStream = fs.createReadStream(filename);
        var typeAttribute = fileExtensions[path.extname(filename)];

        response.writeHead(200, {'Content-Type': typeAttribute});
        fileStream.pipe(response);
    }
    catch(e) {
            console.log("\n\n");
            console.log('File does not exist: ' + filename);
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write('404 - File Not Found (' + filename + ')');
            response.end();
            return;
    }
    return;
    
});

server.listen(5000);

console.log("server alive");
