const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'cat',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("User couldn't be found!");

        request({ url: "https://nekos.life/api/v2/img/meow", json: true }, function(error, response, body) {
                let henEmbed = new Discord.RichEmbed()
                    .setColor("#b6fc03")
                    .setAuthor("meow meow!")
                    .setImage(body.url)
            message.channel.send(henEmbed);
        });

    }
};
