const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'megumin',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("User couldn't be found!");

        request({ url: "https://waifu.pics/api/sfw/megumin", json: true }, function(error, response, body) {
                let henEmbed = new Discord.RichEmbed()
                    .setColor("#FF00FF")
                    .setAuthor("here is megumin!")
                    .setImage(body.url)
            message.channel.send(henEmbed);
        });

    }
};
