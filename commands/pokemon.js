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
 if(args[0] === "Pachirisu" || args[0] === "pachirisu") {
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
 if(args[0] === "Arceus" || args[0] === "arceus") {
  message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Qui est arceus ?")
        .setDescription("Arceus est une créature équine, ressemblant à un centaure ou encore à un qilin, une créature de la mythologie chinoise, avec un ventre strié verticalement. Ce motif strié a plusieurs récurrences sur le dessous de sa crinière et de sa queue, ainsi que sur son visage. Ses quatre pieds pointus se finissent par des sabots dorés. Sa longue crinière s'échappe de l'arrière de sa tête. Son visage est gris, avec des yeux verts et des pupilles rouges, et un motif circulaire en dessous de ses yeux. Arceus a un léger motif doré sur le front et des oreilles qui pointent vers le haut. Son cou est plutôt long, avec deux paires d'excroissances sur chaque côté. Il a également une roue dorée en forme de croix reliée à son corps par son abdomen rond, qui change de couleur, comme ses yeux et ses sabots, par rapport à son type, qui lui-même dépend de la Plaque qu'il possède. La roue est ornée de quatre joyaux. Le motif gris strié de son ventre se résulte sur sa poitrine. Ses cuisses ont un arrière gris et il a des excroissances sur le haut des jambes. La queue de Arceus est assez similaire à sa crinière en terme de forme et de coloration. Selon la légende, Arceus aurait créé l'univers Pokémon avec ses mille bras. Né d'un œuf éclos dans le Néant, Arceus aurait, après sa naissance, créé le monde, ainsi que les Gardiens des Lacs (Créhelf, Créfollet et Créfadet) et le Trio de la Création (Dialga, Palkia et Giratina). Assimilé à une forme de dieu Pokémon, il serait le plus ancien de tous les Pokémon. Pouvant faire apparaître la vie à partir de rien, il peut produire des œufs des membres du trio de la création, afin de constamment préserver l'équilibre du monde si un Dresseur attrape l'un des trois. Selon l'animé, il a également un pouvoir de destruction considérable. Son attaque signature est Jugement.")
        .setColor("#f84848")
        .setTitle("Qui est arceus ?")
        .setThumbnail("http://www.pokepedia.fr/images/0/0b/Arceus-HGSS2.png")
        .setFooter("Demandée par : " + message.author.tag)
      })
 }
 if(args[0] === "Latias" || args[0] === "latias") {
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
 if(args[0] === "pikachu" || args[0] === "Pikachu") {
  message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle("Qui est pikachu ?")
        .setDescription("Pikachu est un Pokémon Souris de type Électrik apparu dès la première génération. En tant que partenaire de Sacha, héros du dessin animé tiré du jeu, il est le plus célèbre des Pokémon et la mascotte officielle de la licence.")
        .setColor("#009933")
        .setTitle("Qui est pikachu ?")
        .setThumbnail("http://i1263.photobucket.com/albums/ii631/Pokemon-Vampire-Knight-lover/pikachu_.gif")
        .setFooter("Demandée par : " + message.author.tag)
      })
 }
 if(args[0] === "propose" || args[0] === "Propose") {
  let pokemon === args.slice(1).join(' ')
  const cfg = require("../config.json")
  bot.users.get(cfg.ownerID).send("", {
   embed: new Discord.RichEmbed()
   .setTitle("Nouvelle proposition de pokemouille x)")
   .setColor("#00fff2")
   .setFooter(message.author.tag)
   .setDescription(`Voici la proposition: ${pokemon}`)
   .setTimestamp()
  })                               
 }
}
