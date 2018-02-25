const Discord = require('Discord.js');
var prefix = "%";
exports.run = (bot, message, args) => {
 if (message.content === prefix + "inviteserver") {
     message.channel.createInvite().then(invite =>
      message.channel.send(invite.url).catch(error => message.reply(`I couldn't do this :/ , here the error : ${error}`)));
   };
}
