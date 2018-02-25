var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix + "emoji"))
    message.delete()
    message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle(":ok_hand: Emoji :smile: ")
        .setDescription(args.join(' '))
        .setColor("#2DC7E4")
        .setTitle(":ok_hand: Emoji :smile: ")
        .setFooter("Demandée par : " + message.author.tag)
      })
}