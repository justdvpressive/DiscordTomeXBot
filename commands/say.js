var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
 if (message.author.id === "268431870025269258") {
    if(message.content.startsWith(prefix+"say")) {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{});
     message.channel.send("", {
       embed: new Discord.RichEmbed()
       .setTitle(":page_with_curl: Message :page_with_curl: : ")
       .setDescription(sayMessage)
       .setColor("#009933")
       .setTimestamp()
       .setFooter(message.author.tag)
     });
   }
 } else return message.reply("NON TU N'EST PAS MON FONDATEUR ! :angry: :angry:")
}
