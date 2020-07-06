const { MessageEmbed } = require("discord.js");

if (!message.member.permissions.has("MANAGE_MESSAGES")){

    const soraya = client.users.cache.get('594251581789044756');
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${message.author.username}`)
    .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando')
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
    return message.reply(embed)
}

module.exports = {
  name: "anuncio",
  description: "Faça o bot dizer o que quiser em um canal específico.",
  usage: "<ID do canal> <msg>",
  run: async (bot, message, args) => {
    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `Você não especificou seu canal para enviar o anúncio também!`
      );
    console.log(rChannel);
    let MSG = message.content
      .split(`${bot.prefix}announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`Você não especificou sua mensagem para enviar!`);
    const _ = new MessageEmbed()
      .setTitle(`Novo anuncio`)
      .setDescription(`${MSG}`)
      .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
      .setColor("RANDOM");
    rChannel.send(_);
    message.delete();
  },
};