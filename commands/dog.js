const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'dog',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("User couldn't be found!");

        request({ url: "https://nekos.life/api/v2/img/woof", json: true }, function(error, response, body) {
                let henEmbed = new Discord.RichEmbed()
                    .setColor("#b6fc03")
                    .setAuthor("dog!")
                    .setImage(body.url)
            message.channel.send(henEmbed);
        });

    }
};
