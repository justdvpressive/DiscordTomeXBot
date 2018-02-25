const Discord = require('Discord.js');


function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var prefix = "%";
exports.run = (bot, message, args) => {
if (message.content.startsWith(prefix+'ping')) {
    message.channel.send('Ping?').then(m => m.edit(`:ping_pong: Mon Ping est ${Math.round(bot.ping)}ms \n:latency: Latence de : ${m.createdTimestamp - message.createdTimestamp}ms`) );
   }
}
