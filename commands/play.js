var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
    if (message.author.id === "268431870025269258") {
    let game = args.join(' ')
    if (message.content.startsWith(prefix + "play"))
    bot.user.setGame(game, 'https://twitch.tv/truepixels').then(message.reply("Here my new playing status : " + game))
  }
}
