var prefix = "%"
function makePass() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-=+_";

    for (var i = 0; i < 86; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
exports.run = (bot, message, args) => {
    if (message.content === prefix + "shit") {
     message.channel.send("fuckin shit br0 : \n" + makePass())
   }
}

