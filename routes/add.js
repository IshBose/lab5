var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here

	var newFriend = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "https://www.fillmurray.com/640/360"
	}
	
	response.render('index',{
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "https://www.fillmurray.com/640/360"
	}); 
	
	data.friends.push(newFriend);

}