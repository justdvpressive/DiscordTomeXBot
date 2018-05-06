var Discord = require("discord.js")
exports.run = (bot, message, args) => {
 if(!args[0]) {
   message.channel.send("", {
    embed: new Discord.RichEmbed()
    .setTitle("Pokemon")
    .setColor("RANDOM")
    .setFooter(message.guild.name, message.guild.iconUrl)
    .setThumbnail(message.author.avatarURL)
    .setDescription("Voici tout les pokemons disponible. \n\nCeriflor \n\nPachirisu \n\nArceus \n\nPikachu \n\nZigarde \n\n**Pour proposer un pokemon, faites pokemon propose {nom du pokemon}")
   })
  }
}
