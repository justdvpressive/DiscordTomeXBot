const Discord = require("discord.js")
var prefix = ")"
exports.run = (bot, message, args) => {
  if(message.author.id === "268431870025269258") {
    if(message.content.startsWith(prefix+"restart")) {
      message.reply("Ok restarting").then(process.exit())
    }
  } else message.reply("Ok restarting").then(message.reply("There was a error! : You are not my owner :o"))
}
