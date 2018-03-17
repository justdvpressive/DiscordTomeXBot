const Discord = require("discord.js")
const bot = new Discord.Client()
const fs = require("fs")
const config = require("./config.json")
var commandRun = JSON.parse(fs.readFileSync("./commands.json", "utf8"));
bot.login(config.token)
var prefix = config.prefix

bot.on("ready", ready => {
  console.log("Prêt à servir mon propriétaire TomeX#0733 | " + bot.users.get(config.owner).tag + " !")
  bot.user.setStatus("dnd")
})

bot.on("guildMemberAdd", member => {
  member.guild.channels.find("name", "welcome").send("", {
         embed: new Discord.RichEmbed()
         .setTitle("Message de bienvenue :o")
         .setDescription("Bienvenue à <@" + member.id + "> sur " + member.guild.name)
         .setColor("#2DC7E4")
         .setTitle("Oh un nouveau Membre ?")
         .setFooter("Va Lire les Règles ;)")
        })
})

// CommandHandler

bot.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  if(!commandRun) commandRun = {
    num: 0
  }
  fs.writeFileSync("./commands.json", JSON.stringify(commandRun), (err) => {
      if (err) console.error(err)
    });
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    try {
    let commandFile = require(`./commands/${command}.js`);
      commandFile.run(bot, message, args);
      commandRun.num++
      fs.writeFileSync("./commands.json", JSON.stringify(commandRun), (err) => {
      if (err) console.error(err)
    });
    } catch (err) {
      console.error(err);
      message.reply(":x: Une erreur est survenue ! Veuillez contacter <@268431870025269258> :x:  ```" + err + "```")
      bot.users.get(config.owner).send("", {
	      embed: new Discord.RichEmbed()
	   	  .setTitle(":x: ERREUR :x:")
		    .setDescription(err)
		    .setColor("#ff0000")
        .setTimestamp()
        .setFooter("Voici le nom du joueur qui a rencontré le problème : " + message.author.tag + ". Voici le nom du serveur : " + message.guild.name)
 	     });
    }
});
