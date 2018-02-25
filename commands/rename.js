const Discord = require('Discord.js');
var prefix = "%";
exports.run = (bot, message, args) => {
if (message.author.id === "269554301746020362") {
  if (message.content.startsWith(prefix + "rename")) {
   let member = message.mentions.members.first();
   let nick = args.join(' ')
   member.setNickname(nick).then(message.channel.send("I just renamed " + member + " to " + nick))
   }
 }
}