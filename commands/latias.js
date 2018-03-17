var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix + "latias"))
    message.delete()
    message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Qui est latias ?")
        .setDescription("Latias est un Pokémon légendaire de type Dragon et Psy de la troisième génération. Premier Pokémon légendaire sexué de genre féminin, Latias forme un duo avec son homologue masculin Latios (le Duo éon ou plus communément Lati@s). Tous deux sont des ambassadeurs de la troisième génération, et sont les stars du cinquième film, « Les Héros Pokémon », sorti le 13 juillet 2002 au Japon.")
        .setColor("#009933")
        .setTitle("Qui est latias ?")
        .setThumbnail("https://i.imgur.com/Y9TXo9q.gif")
        .setFooter("Demandée par : " + message.author.tag)
      })
}