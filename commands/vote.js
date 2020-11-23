const Discord = require('discord.js');

module.exports = {
    name: 'vote',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#f096ea")
            .setAuthor("Aliceliese")
            .addField("Vote Me:", "[Click Here To Vote Me](https://top.gg/bot/757923735171891240/vote)")
            .setFooter("Aciceliese: " + " Requested by " + message.author.username);
        message.channel.send(embed);
    }
};
