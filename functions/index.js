const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Quiubo perro?");
});


//segunda prueba:

exports.addMessage = functions.https.onRequest((req, res) => {
	const original = req.query.text;
	admin.database().ref("/mensajes").push({original:original})
		.then(s=>{
			res.redirect(303, s.ref);
		})
});



//envío de emails:
var nodemailer = require("nodemailer");
exports.sendMail = functions.https.onRequest((req, res)=>{
	var transporter = nodemailer.createTransport({
		//service:"Gmail",
		host: 'smtp.gmail.com',
        port: 587,
        //secure: true,
		auth: {
			user:"fixtergeek@gmail.com",
			pass:"Poweroso1704"
		}
	});
	var text = "Envíado automaticamente prro!";
	var mailOptions = {
		from: "fixtergeek@gmail.com",
		to:req.query.mail,
		subject: "Email desde cloud functions",
		text:text
	};
	transporter.sendMail(mailOptions, function(err, info){
		if(err){
			console.log(err);
			res.json({yo:"error",error:err});
		}else{
			res.json({yo:info.response});
		}
	});
});


//on trigger events in database
exports.makeUppercase = functions.database.ref("/mensajes/{pushId}/original")
	.onWrite(event => {
		const original = event.data.val();
		const uppercase = original.toUpperCase();
		return event.data.ref.parent.child("uppercase").set(uppercase);
	})


















