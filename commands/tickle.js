const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'baka',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("**Could not find the user**");

        request({ url: "https://nekos.life/api/v2/img/tickle", json: true }, function(error, response, body) {
                let henEmbed = new Discord.RichEmbed()
                    .setColor("#03e3fc")
                    .setAuthor(message.author.username + " is tickling " + user.username)
                    .setImage(body.url)
            message.channel.send(henEmbed);
        });

    }
};
