var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix + "ceriflor"))
    message.delete()
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