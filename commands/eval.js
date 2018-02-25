const Discord = require('discord.js')
const fs = require("fs")
const moment = require("moment")
const os = require("os")
var prefix = "%"
const { inspect } = require('util');
const { post } = require('snekfetch');
exports.run = (bot, message, args) => {
    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(`//g, "" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)`);
        else
            return text;
      }
    if (message.content.startsWith(prefix + "eval")) {
      if(message.author.id !== "268431870025269258") return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

          message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
}
