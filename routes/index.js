
	var risePay = require('../lib/risepay');

	risePay.connect({
		username: "jhonndev",
		password: "U0H464z4" 
	});


module.exports = function(app){

//Testing Api via Console

							app.get("/", function(req, res){

									 risePay.auth({
								  	NameOnCard: "Jhonny",
									CardNum : "5149612222222229",
									ExpDate : "1214",
									Amount: 10,
									CVNum: "678",
									InvNum: "ABC123",
									Zip: "33139",
									Street: "1880 Alton Road",
									Customer: "JR"
									}, function(data){
											

						  					res.send(data.Message);
									});	

								});


					app.get("/test", function (req, res) {
						
					});





}