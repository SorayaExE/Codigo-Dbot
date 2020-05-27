if (!message.member.permissions.has("BAN_MEMBERS")){
    const soraya = client.users.cache.get('594251581789044756');
    const aembed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${message.author.username}`)
    .setDescription('Você é fraco, lhe falta permissão de ademir para usar esse comando')
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
    return message.reply(aembed)
}

if(!args[0]){
const soraya = client.users.cache.get('594251581789044756');
const bembed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle(`${message.author.username}`)
.setDescription('Você não especificou o tempo!')
.setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
return message.channel.send(`bembed`)
}