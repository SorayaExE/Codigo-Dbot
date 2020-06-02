const Discord = require("discord.js");

client.on("guildMemberRemove", async member => {
  
    const soraya = client.users.cache.get('594251581789044756');
    let canal = client.channels.cache.get("711373673310978150");
    const leftEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('; - ; triste estou')
    .setAuthor(member.user.tag, member.user.avatarURL())
    .setDescription(`${member.user.username} Saiu do servidor ; -;`)
    .setThumbnail(member.user.avatarURL())
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());

    canal.send(leftEmbed);
});
module.exports.run = async (bot, message, args) => {
  function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
  };
  let verifLevels = ["Nada", "Baixa", "Media", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
  let region = {
      "Brasil": ":flag_br: Brazil",
      "eu-central": ":flag_eu: Central Europe",
      "singapore": ":flag_sg: Singapore",
      "us-central": ":flag_us: U.S. Central",
      "sydney": ":flag_au: Sydney",
      "us-east": ":flag_us: U.S. East",
      "us-south": ":flag_us: U.S. South",
      "us-west": ":flag_us: U.S. West",
      "eu-west": ":flag_eu: Western Europe",
      "vip-us-east": ":flag_us: VIP U.S. East",
      "london": ":flag_gb: London",
      "amsterdam": ":flag_nl: Amsterdam",
      "hongkong": ":flag_hk: Hong Kong",
      "russia": ":flag_ru: Russia",
      "southafrica": ":flag_za:  South Africa"
  };
  const embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .addField("Nome", message.guild.name, true)
  .addField("ID", message.guild.id, true)
  .addField("Dono", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("Região", region[message.guild.region], true)
  .addField("Total | Humanos | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
  .addField("Level de verificação", verifLevels[message.guild.verificationLevel], true)
  .addField("Canais", message.guild.channels.size, true)
  .addField("Cargos", message.guild.roles.size, true)
  .addField("Data de criação", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
  .setThumbnail(message.guild.iconURL)
message.channel.send({embed});
}

module.exports.help = {
name:"serverinfo"
}