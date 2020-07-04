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
  .setDescription('Em que você deseja ser mencionado?')
  .addFields(
    { name: 'Avisos e novidades', value: ':warning:' },
    { name: 'Parcerias', value: ':handshake:' },
    { name: 'Votações', value: ':white_check_mark:'}
  )
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  await message.channel.send(embed);

  message.channel.send('').then(marcados =>
    marcados.delete()
  )


}               
