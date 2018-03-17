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
  
    
=  Server Infomations =
\nTotal users :: ${bot.guilds.reduce((p, c) => p + c.memberCount, 0).toLocaleString() } Users
Total bots :: ${bot.users.filter(user => user.bot).size.toLocaleString()} Bots
I am in :: ${bot.guilds.size.toLocaleString()} Servers
\n= Bot Informations =

Ping :: ${Math.round(bot.ping)}ms
\n=  Process Statistics =
\nDiscordJS Version :: v${Discord.version}
NodeJS Version :: ${process.version}
Process uptime :: ${moment.duration(process.uptime() * 1000).format(" D [days] H [hrs] m [mins] s [secs]")}
Client uptime :: ${moment.duration(bot.uptime).format(" D [days] H [hrs] m [mins] s [secs]")}
\n=  Pc Informations =
\nExplotation system :: ${require('child_process').execSync('ver').toString().trim()}
Memory Usage :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
Memory Heap :: ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB
Total memory :: ${(os.totalmem() / Math.pow(1024, 3)).toLocaleString()} Gigabytes
Free memory :: ${(os.freemem() / Math.pow(1024, 3)).toLocaleString()} Gigabytes`, {
              code: 'asciidoc'
     })}
