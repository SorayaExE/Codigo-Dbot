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
  .setColor('#0099ff')
  .setTitle('<a:christmas_parrot:711787152350117989>Coxinha<a:christmas_parrot:711787152350117989>')
  .setAuthor('Desocupado-Bot', 'https://i.imgur.com/f5dzzNq.png', 'https://discord.js.org')
  .addFields(
  { name: 'Começei a vender coxinhas', value: '20 contu a unidade'},
  { name: 'quem quiser chamo o', value: `${soraya.tag} no privado` }
  )   
  .setTimestamp()
	.setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}               
