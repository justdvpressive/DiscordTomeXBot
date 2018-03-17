var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix + "arceus"))
    message.delete()
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