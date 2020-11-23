const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#f096ea")
            .setAuthor("Aliceliese")
            .addField("Invite Me:", "[Click Here To Invite Me](https://top.gg/bot/757923735171891240)")
            .setFooter("Aciceliese: " + " Requested by " + message.author.username);
        message.channel.send(embed);
    }
};
