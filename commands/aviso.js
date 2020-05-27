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
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('<a:ouu:714717157178736650>Sorteios<a:ouu:714717157178736650>')
  .setAuthor('Desocupado-Bot', 'https://i.imgur.com/f5dzzNq.png')
  .setDescription('Agora o bot Desocupado faz sorteios!!!!')
  .addFields(
    { name: 'Novo chat de sorteios!!!', value: 'Vão acontecer varios sorteios de agora em diante fique ligado!!!' },
  )
  .setTimestamp()
	.setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}               
