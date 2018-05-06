var Discord = require("discord.js")
var prefix = "%"
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
 if(args[0] === "Ceriflor" || args[0] === "ceriflor") {
  message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Qui est Ceriflor ?")
        .setDescription("Ceriflor st un Pokémon de type Plante de la quatrième génération. Ceriflor est l'un des ambassadeurs de sa génération, il a été révélé pour la première fois dans le numéro du mois d'août 2006 du mensuel CoroCoro Comics, aux côtés de Pachirisu et Drascore.")
        .setColor("#009933")
        .setTitle("Qui est Ceriflor ?")
        .setThumbnail("http://www.pokepedia.fr/images/2/26/Ceriflor-DP.png")
        .setFooter("Demandée par : " + message.author.tag)
      })
 }
}
