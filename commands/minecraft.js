const Discord = require('discord.js')
var prefix = "%"
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix+"minecraft")) {
    let user = args[0]
    let url = "https://www.namemc.com/profile/" + user + ".1"
    message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Minecraft")
        .setDescription(`Profile du joueur : [Lien](${url})`)
        .setColor("#2DC7E4")
        .setTitle("NameMC Search:")
        .setFooter("Requested by: " + message.author.tag)
      })
    }
}
