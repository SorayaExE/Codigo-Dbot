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
  .setTitle('<a:oveia:715776701677961297>Novo Sistema de RolePlay/Eroge RolePlay<a:oveia:715776701677961297>')
  .setAuthor('Desocupado-Bot', 'https://i.imgur.com/f5dzzNq.png')
  .addFields(
    { name: 'Tutorialzin', value: 'Para criar uma ficha se direcione até <#716497854579081326> Marque o Staff <@548245007484583977> para que sua ficha seja avaliada, Caso sua ficha seja aprovada, você receberá uma tag de Aprovado, assim ganhando a visão dos Canários, Qualquer Dúvida entre em contato com o único Staff que sabe oque é um Rp, Meu Querido amigo Calango, Caso queira uma Moradia ou um local de trabalho porfavor se direcione á sala <#716798770217746593>, Bom Dia, Boa Tarde, Boa Noite' }
  )
  .setTimestamp()
	.setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}               
