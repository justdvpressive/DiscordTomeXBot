var prefix = "%";
const Discord = require('Discord.js');
const moment = require("moment");
require("moment-duration-format");
var os = require('os');
const fs = require("fs");
const platform = require("platform");
var guilds = {};
exports.run = (bot, message, args) => {
if (message.content === prefix + "stats")
    message.channel.send("Requested by " + message.author.tag)
    message.channel.send(`== = Bot Statistics = ==

    \`  Username ${bot.user.tag}'
  
=  Bot Statistics =
    
=  Statistiques du TomeXBot / Serveur =
      -> Total d'utilisateurs :: ${bot.guilds.reduce((p, c) => p + c.memberCount, 0).toLocaleString() } Utilisateurs
      -> Total des bot :: ${bot.users.filter(user => user.bot).size.toLocaleString()} Bots
      -> Je suis dans  :: ${bot.guilds.size.toLocaleString()} Serveurs
      -> Total D'emojis (sur tout les servs ou je suis) :: ${bot.emojis.size.toLocaleString()} Emojis
      -> Total des channels (sur tout les servs ou je suis) :: ${bot.channels.size.toLocaleString()} Channels
=  Imformation du bot =
      -> Ping ou le %ping :: ${Math.round(bot.ping)}ms
=  Process Statistics =
      -> Version du DiscordJS (du dev) :: v${Discord.version}
      -> Version du NodeJS (du dev) :: ${process.version}
      -> Bot allumée depuis :: ${moment.duration(process.uptime() * 1000).format(" D [days] H [hrs] m [mins] s [secs]")}
      -> Client pret depuis :: ${moment.duration(bot.uptime).format(" D [days] H [hrs] m [mins] s [secs]")}
=  Statisique du pc =
      -> Systeme d'explotation :: ${require('child_process').execSync('ver').toString().trim()}
      -> Pc du (du dev) Allumée depuis :: ${moment.duration(os.uptime(), "seconds").format(" D [days] H [hrs] m [mins] s [secs]")}
      -> J'utilise :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
      -> J'ai au total :: ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB
      -> Ram du pc du (du dev) :: ${(os.totalmem() / Math.pow(1024, 3)).toLocaleString()} Gigabytes
      -> Ram libre du (du dev) :: ${(os.freemem() / Math.pow(1024, 3)).toLocaleString()} Gigabytes`, {
              code: 'asciidoc'
     })}
