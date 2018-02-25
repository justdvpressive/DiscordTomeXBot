const Discord = require('Discord.js');
var prefix = "%";
exports.run = (bot, message, args) => {
    if (message.content.startsWith(prefix+'avatar')) {
        if (!message.mentions.users.size) {
            return message.channel.send(`bow: Ton Avatar : ${message.author.displayAvatarURL}`);
        }
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s Avatar : ${user.displayAvatarURL}`;
        });
        message.channel.send(avatarList);
      }
}