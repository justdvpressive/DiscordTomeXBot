const Discord = require('discord.js')
var prefix = "%"
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix+"serverinfo")) {
        message.channel.send('', {
            embed: new Discord.RichEmbed()
            .setTitle(":page_with_curl: Info du serveur")
            .setDescription("\n\n:bust_in_silhouette: Nombre de membres : " + message.guild.memberCount + " \n\n:pencil: Nom du serveur  : " + message.guild.name + " \n\n:page_facing_up: ID Du Serveur : " + message.guild.id + " \n\n:zzz: Channel AFK (Absent) : " + message.guild.afkChannel + " \n\n:hammer: Owner of the guild : " + message.guild.owner.user.tag + " \n\n:dark_sunglasses: Level du serveur  : " + message.guild.verificationLevel)
            .setThumbnail("https://t1.rbxcdn.com/223ff07f598f4e8e803d5f594692a200")
            // yes roblox, fuk my life
            .setFooter("Demandée par : " + message.author.tag)
            .setColor("#0099ff")
        });
    }
}
