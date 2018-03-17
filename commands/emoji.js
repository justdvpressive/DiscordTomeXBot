var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix + "emoji"))
    message.delete()
    message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("LatiasEmoji")
        .setDescription(args.join(' '))
        .setColor("#f84848")
        .setTitle("LatiasEmoji")
        .setFooter("Demandée par : " + message.author.tag)
      })
}