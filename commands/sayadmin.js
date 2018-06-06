//why this command for administrator... lol
var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
    if(message.channel.permissionsFor(message.member).hasPermission("ADMINISTRATOR") ) {
     if(message.content.startsWith(prefix+"sayadmin")) {
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{});
      message.channel.send(message.author.tag + " a dit : " + sayMessage).catch(error => message.reply(`I couldn't do this :/ , here the error : ${error}`));
    }
  } else return message.reply("fuk u you don't have perm @€veryone lol")
}
