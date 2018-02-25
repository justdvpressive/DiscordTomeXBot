function makePass() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-=+";

    for (var i = 0; i < 86; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var prefix = "%"

exports.run = (bot, message, args) => {
    if (message.content === prefix + "shit")
     message.channel.send("Here your ramdom shit : \n" + makePass())
   }
