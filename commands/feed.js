const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'feed',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("**Could not find the user**");

        request({ url: "https://nekos.life/api/v2/img/feed", json: true }, function(error, response, body) {
                let henEmbed = new Discord.RichEmbed()
                    .setColor("#3dfc03")
                    .setAuthor(message.author.username + " has fed " + user.username)
                    .setImage(body.url)
            message.channel.send(henEmbed);
        });

    }
};
