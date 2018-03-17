var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix + "zigarde"))
    message.delete()
    message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Qui est Zigarde ?")
        .setDescription("Zigarde st un Pokémon légendaire de type Dragon et Sol de la sixième génération. Il forme un trio légendaire avec Xerneas et Yveltal. Dans le numéro d'octobre 2015 du CoroCoro Comics, quatre nouvelles formes de Zygarde ont été révélées. Elles apparaissent successivement dans le dessin animé, dans certains jeux secondaires (Pokémon Picross et Pokémon Shuffle) et dans le Jeu de Cartes à Collectionner, mais pas dans les jeux vidéo de la série principale pour la sixième génération. Les formes 10% et Parfaite sont officialisées par Junichi Masuda le 11 Juin 2016 pour les jeux de la septième génération Pokémon Soleil et Lune.")
        .setColor("#009933")
        .setTitle("Qui est Zigarde ?")
        .setThumbnail("http://www.pokepedia.fr/images/8/8e/Zygarde-XY.png")
        .setFooter("Demandée par : " + message.author.tag)
      })
}