var renderer = require('./renderer.js');
var querystring = require('querystring')
const loremIpsum = require("./generator.js");

//2. Handle HTTP route GET / and POST / i.e. Home
//home route
function home(request, response) {
	//if url == "/" && GET
	if(request.url === '/') {
		if (request.method.toLowerCase() === "get") {
			//show search
			response.statusCode = 200;
			response.setHeader('Content-Type', 'text/html');
			renderer.view('header', {}, response);
			renderer.view('search', {}, response);
			renderer.view('footer', {}, response);	
			response.end();
		} else {
			//if url == "/" && POST

			//get the post data from body
			request.on('data', function(postBody) {
				console.log(postBody.toString());
				//extract the user input, number of paragraphs
				var query = querystring.parse(postBody.toString());
				console.log(query.numberOfParagraphs);
				//redirect to /:#  ie: numberOfParagraphs
				response.writeHead(303, {"Location": "/" + query.numberOfParagraphs});
				response.end();					
			})
		}
	}	
}

//3.  Handle HTTP route Get /:numberOfParagraphs i.e. /5
//user route
function generate(request, response) {
	//if url == "/..."
	var numberOfParagraphs = request.url.replace('/', '');
	if (numberOfParagraphs.length > 0) {
		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/html');
		renderer.view('header', {}, response);
		renderer.view('search', {}, response);

		//generate paragraph html
		let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
		var values = {placeholder: loremIpsumText};
		renderer.view('generatedContent', values, response);
		renderer.view('footer', {}, response);
		response.end();
											
	}
}

module.exports.home = home;
module.exports.generate = generate;