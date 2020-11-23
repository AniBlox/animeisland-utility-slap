const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'lizard',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("User couldn't be found!");

        request({ url: "https://nekos.life/api/v2/img/lizard", json: true }, function(error, response, body) {
                let henEmbed = new Discord.RichEmbed()
                    .setColor("#FF00FF")
                    .setAuthor("Lizard!")
                    .setImage(body.url)
            message.channel.send(henEmbed);
        });

    }
};
