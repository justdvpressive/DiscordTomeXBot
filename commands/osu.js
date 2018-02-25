const Discord = require('discord.js')
var prefix = "%"
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix+"osu")) {
    let user = args[0]
    let url = "https://osu.ppy.sh/u/" + user
    message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Osu!")
        .setDescription(`Here you osu! [profile](${url})`)
        .setColor("#2DC7E4")
        .setFooter("Requested by: " + message.author.tag)
      })
    }
}
