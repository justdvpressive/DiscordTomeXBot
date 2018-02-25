const Discord = require('Discord.js');
var prefix = "%";
exports.run = (bot, message, args) => {
    if(message.content.startsWith(prefix+"purge")) {
        if(message.channel.permissionsFor(message.member).hasPermission("MANAGE_CHANNELS") ) {
            const user = message.mentions.users.first();
            const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
            if (!amount) return message.reply('Combien ? :/');
            if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
            message.channel.fetchMessages({
            limit: amount,
            }).then((messages) => {
            if (user) {
            const filterBy = user ? user.id : bot.user.id;
            messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
            }
            message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
            message.reply(`A pus j'ai suprimée ${amount} messages :smilet: !`)
            });
        } else return message.reply("LES PERMS PAS VRAI MONSIEUR :angry:")
    }
}
