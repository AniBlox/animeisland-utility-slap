const Discord = require('discord.js');
const request = require('request');
const fetch = require("node-fetch");

module.exports = {
    name: 'bite',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("**Could not find the user**");

        request({ url: "https://waifu.pics/api/sfw/bite", json: true }, function(error, response, body) {
                let henEmbed = new Discord.RichEmbed()
                    .setColor("#03e3fc")
                    .setAuthor(message.author.username + " has Bit " + user.username)
                    .setImage(body.url)
            message.channel.send(henEmbed);
        });

    }
};
