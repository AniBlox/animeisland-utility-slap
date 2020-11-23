let choices = ["rock", "paper", "scissors"];
const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  try {
    if (!args[0])
      return message.reply("You need to input rock, paper, or scissors!");

    if (!choices.includes(args[0]))
      return message.reply("To play rock, paper, or scissors!");

    let urps = args[0];
    let brps = choices.random();
    let low;

    if (urps == brps) low = "Its a tie!";

    if (urps == "rock" && brps == "paper" && !low) low = "I Win!";
    if (urps == "scissors" && brps == "rock" && !low) low = "I Win!";
    if (urps == "paper" && brps == "rock" && !low) low = "you Win!";
    if (urps == "rock" && brps == "scissors" && !low) low = "You Win!";
    if (urps == "paper" && brps == "scissors" && !low) low = "I Win!";
    if (urps == "scissors" && brps == "paper" && !low) low = "You Win!";

    const embed = new Discord.MessageEmbed()
      .setTitle(low)
      .setDescription("I choose " + brps + "\nAnd you choose " + urps)
      .setColor("#f54242");

    message.channel.send(embed);
  } catch (err) {
    console.log(err);
    message.channel.send("Error RPS command Try again");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "rps",
  category: "Etc",
  description: "Rps with kawaii imouto",
  usage: "<prefix>rps <rock, paper, scissors>",
  option: ""
};
