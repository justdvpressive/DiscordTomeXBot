var prefix = "%"
const Discord = require("discord.js")
exports.run = (bot, message, args) => {
 if(message.content.startsWith(prefix+"pokepropose")) {
  let pokemouille = args.join(' ')
  bot.users.find("id","268431870025269258").send("", {
   embed: new Discord.RichEmbed()
   .setTitle("Nouvelle proposition de pokemouille x)")
   .setColor("#00fff2")
   .setFooter(message.author.tag)
   .setDescription(`Voici la proposition: ${pokemouille}`)
   .setTimestamp()
  })
 }
}