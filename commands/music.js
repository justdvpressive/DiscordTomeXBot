const Discord = require("discord.js")
var prefix = ")"
exports.run = async (bot, message, args) => {
  if (message.content.startsWith(prefix + 'music')) {
    const ytdl = require('ytdl-core');
    const streamOptions = { seek: 0, volume: 1 };
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
        const stream = ytdl(message.content.substr(7), { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
      message.reply('I am connected!\n ✖ => Stop the song\n ▶ => Pause the song\n 🔃 => Unpause the song').then(messagex => {
            const collecteur = messagex.createReactionCollector((reaction, user) => user.id === message.author.id);
            messagex.react('✖')
            collecteur.on('collect', async(reaction) => {
             if (reaction.emoji.name === "✖") { //Si la réaction est ce que l'on veut, on utilise toujours l'unicode
               dispatcher.end();
             }
            await reaction.remove(message.author.id);
            })
            messagex.react('▶')
            collecteur.on('collect', async(reaction) => {
             if (reaction.emoji.name === "▶") { //Si la réaction est ce que l'on veut, on utilise toujours l'unicode
               dispatcher.pause();
             }
            await reaction.remove(message.author.id);
            })
              messagex.react('🔃')
            collecteur.on('collect', async(reaction) => {
             if (reaction.emoji.name === "🔃") { //Si la réaction est ce que l'on veut, on utilise toujours l'unicode

               dispatcher.resume();
             }
            await reaction.remove(message.author.id);
            })
            })
        if(dispatcher.end) {
         message.member.voiceChannel.remove();
        }
          })
        .catch(console.log);
          } else {
      message.reply("You need to be connected in a voice chat");
    }
  }
}
