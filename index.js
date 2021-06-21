const Discord = require("discord.js");
const client = new Discord.Client();
const {
	JsonDatabase
} = require("wio.db");
const db = new JsonDatabase("db");
var kanal = "717719291788787753";
var sahip = "451392714924097558";

client.on("ready",()=>{
	console.log("Hazır ! ");
});

//ArdaDemr Youtube

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo h");
	};
},15500);
//ArdaDemr Youtube
client.on("message",message=>{
	if(message.channel.id==kanal || message.channel.type == "dm"){
		if(message.author.id=="408785106942164992"){
			if(message.content.includes("Beep Boop") || message.content.includes("Please DM me") || message.content.includes("human") || message.content.includes("check")){
				db.set("owodg","1");
				message.channel.send("Durduruldu açmak için !aç");
			};
		};
	};

	if(message.author.id == sahip){
		if(message.content == "!aç"){
			db.set("owodg","0");
			message.channel.send("Açıldı");
		};
	};
});

//ArdaDemr Youtube

client.login("mfa.N1Ab6B9XtDhOogApBYv2mK90prLDiG4yli3WV0Y0hO06PpiXngg0Haboy9IwMLwJaahwqUi-wWixetzs2wNw");
