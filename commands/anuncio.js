if (!message.member.permissions.has("BAN_MEMBERS")){

    const aembed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${message.author.username}`)
    .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando')
    .setFooter('Desenvolvido por Soraya{Savanna}');
    return message.reply(aembed)
}