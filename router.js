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
				//redirect to /:username
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

		//create paragraph html
		let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
		var values = {placeholder: loremIpsumText};
		renderer.view('generatedContent', values, response);
		renderer.view('footer', {}, response);
		response.end();

		// //get json from treehouse
		// var studentProfile = new Profile(username);
		// //on 'end'
		// studentProfile.on("end", function(profileJSON) {
		// 	//show profile

		// 	//store values which we need
		// 	var values = {
		// 		avatarUrl: profileJSON.gravatar_url,
		// 		username: profileJSON.profile_name,
		// 		badges: profileJSON.badges.length,
		// 		javascriptPoints: profileJSON.points.JavaScript
		// 	}
		// 	//Simple response
		// 	renderer.view('profile', values, response);
		// 	renderer.view('footer', {}, response);
		// 	response.end();
		// });
		
		// //on 'error'
		// studentProfile.on("error", function(error) {
		// 	//show error
		// 	renderer.view('error', {errorMessage: error.message}, response);
		// 	renderer.view('search', {}, response);
		// 	renderer.view('footer', {}, response);
		// 	response.end();
		// });
											
	}
}

module.exports.home = home;
module.exports.generate = generate;