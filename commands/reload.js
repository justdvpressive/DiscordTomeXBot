var prefix = "%";
const Discord = require('Discord.js');
exports.run = (bot, message, args) => {
    if (message.author.id === "268431870025269258") {
    if(!args || args.size < 1) return message.reply(":hammer_pick: J'aurais besoin de plus d'info ? Pourrais tu être tu clair ? :tools:`");
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`:hammer_pick: Commande : ${args[0]} A été Rechargée avec Succée :tools:`);
    } else return message.reply("Est tu mon fondateur ? :angry:")
  };
