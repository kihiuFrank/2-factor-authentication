const express = require(“express”);

const app = express();


const options = {

	apiKey: 'affd0edb61601417c8f3a7daa9eaa2591c9d863a3451abfc2a8e37305397215c',
	//use your sandbox app API key for development in the test environment

	username: 'sandbox',
	// use ‘sandbox’ for development in the test environment

};

const AfricasTalking = require('africasTalking')(options);




app.post("/", (req,res) => {

//Define the service needed (SMS)



const sms = AfricasTalking.SMS;

// all methods return a promise



const opts = {

to: '+254726101804',

from: '57222', // This is the short code you inputed before.

message: 'Registered Successfully!!',

}; //Configure options for message sending



sms.send(opts)

.then(function(success) {

console.log(success);

})

.catch(function(error) {

console.log(error);

}); //Actually send the message

});


app.listen(3000, function() {

console.log("Started at localhost 3000");

});