const Discord = require("discord.js")
var prefix = "%"
exports.run = (bot, message, args) => {
  if(message.content.startsWith(prefix+"help")) {
    if(!args[0]) {
      message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setThumbnail("https://image.noelshack.com/fichiers/2018/08/6/1519483807-lubuntu-first-logo-svg.png")
        .setTitle(":pushpin: Guilde de TomeXBot ! :blue_book:")
        .setDescription("\n:warning: Respecte bien les Majuscules ! : ) \n\n:pencil: Voici toutes les catégories disponible : \n\n:page_with_curl: %help Info \n:wave: %help Fun \n:tools: %help Outils \n\n:flag_white: Langue : :flag_fr: \n:keyboard: Metode de dev utilisée : NodeJS Lien : https://nodejs.org \n\n:hammer_pick: Certaine commands ne sont pas dans le help car elle sont entrain d'être dev / modifié. Merci TomeX. :hammer_pick:")
        .setFooter(message.author.tag)
        .setColor("#0099ff")
      });
    }
    if(args[0] === "Info") {
      message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle(":page_with_curl: Info")
        .setThumbnail("https://image.noelshack.com/fichiers/2018/08/6/1519483807-lubuntu-first-logo-svg.png")
        .setDescription("\n:warning: Respecte bien les Majuscules ! : ) \n\n:pencil: Voici toutes les commandes disponible sur cette catégorie : \n\n:printer: %stats \n:page_facing_up: %serverinfo \n:video_game: %osu [Pseudo] \n:game_die: %minecraft [Pseudo] \n\n:hammer_pick: Certaine commands ne sont pas dans le help car elle sont entrain d'être dev / modifié. Merci TomeX. :hammer_pick:")
        .setFooter(message.author.tag)
        .setColor("#0099ff")
      })
    }
    if(args[0] === "Outils") {
      message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle(":tools: Outils")
        .setThumbnail("https://image.noelshack.com/fichiers/2018/08/6/1519483807-lubuntu-first-logo-svg.png")
        .setDescription("\n:warning: Respecte bien les Majuscules ! : ) \n\nVoici toutes les commandes disponible sur cette catégorie : \n\n:hammer: %ban \n:mag: %google [Indisponible]\n:minidisc: %rename [Indisponible] \n:x: :speech_balloon: %purge \n:rocket: %inviteserver \n:musical_note: %music [Indisponible] \n\n:hammer_pick: Certaine commands ne sont pas dans le help car elle sont entrain d'être dev / modifié. Merci TomeX. :hammer_pick:")
        .setFooter(message.author.tag)
        .setColor("#0099ff")
      })
    }
    if(args[0] === "Fun") {
      message.channel.send("", {
        embed: new Discord.RichEmbed()
        .setTitle(":wave: Fun")
        .setThumbnail("https://image.noelshack.com/fichiers/2018/08/6/1519483807-lubuntu-first-logo-svg.png")
        .setDescription("\n:warning: Respecte bien les Majuscules ! : ) \n\n:pencil: Voici toutes les commandes disponible sur cette catégorie : \n\n:poop: %shit \n:camera: %gif [Un peu longue a des moments Désolé.]\n:8ball: %8ball \n:bow: %avatar \n\n:hammer_pick: Certaine commands ne sont pas dans le help car elle sont entrain d'être dev / modifié. Merci TomeX. :hammer_pick:")
        .setFooter(message.author.tag)
        .setColor("#0099ff")
      })
    }
  }
}
