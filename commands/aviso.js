const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")){

        const soraya = client.users.cache.get('594251581789044756');
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando')
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
        return message.reply(embed)
    }
  let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  message.delete().catch(O_o => {});
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`<a:oveia:715776701677961297>Novidades da autalização<a:oveia:715776701677961297>`)
  .setAuthor('Desocupado-Bot', 'https://i.imgur.com/f5dzzNq.png')
  .setTitle(`Canais de anuncios!\n> Nova tela de boas vindas!`)
  .setImage('https://imgur.com/uvq8bUM.png')
  .setTimestamp()
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}               
