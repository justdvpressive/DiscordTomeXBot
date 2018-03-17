var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix + "pachirisu"))
    message.delete()
    message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Qui est Pachirisu ?")
        .setDescription("Pachirisu est un Pokémon de type Électrik de la quatrième génération. Pachirisu est l'un des ambassadeurs de sa génération, il a été révélé pour la première fois dans le numéro du mois d'août 2006 du mensuel CoroCoro Comics, aux côtés de Ceriflor et Drascore.")
        .setColor("#009933")
        .setTitle("Qui est Pachirisu ?")
        .setThumbnail("http://www.pokepedia.fr/images/e/e6/Pachirisu-DP.png")
        .setFooter("Demandée par : " + message.author.tag)
      })
}