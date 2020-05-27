const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("BAN_MEMBERS")){

   const soraya = client.users.cache.get('594251581789044756');
     const lembed = new Discord.MessageEmbed()
       .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando')
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
        return message.reply(lembed)
    }
        let member = message.mentions.members.first()
        if(!member){
        const soraya = client.users.cache.get('594251581789044756');
        const oembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Você esqueceu de mencionar um usuário!')
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
        return message.reply(oembed)
}
        if(!member.bannable){
        const soraya = client.users.cache.get('594251581789044756');
        const iembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Não posso banir esse membro ele pode ter um cargo maior que o meu!')
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
        return message.reply(iembed)
        }
        let reason = args.slice(1).join(' ')
        if(!reason) reason = "Nenhuma razão fornecida"
        await member.ban(reason)
        const soraya = client.users.cache.get('594251581789044756');
        const uembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription(`Desculpe ${message.author} nao consigo banir o membro devido o : ${error} `)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
        .catch(error => message.reply(uembed))

        message.channel.send(`${message.author}`)


        const soraya = client.users.cache.get('594251581789044756');
        let pEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle(":hammer: Ban")
        .setDescription("Membro banido:", `${member.user}`)
        .addField("Banido por:", `${massage.author}`)
        .addField("Motivo:", `${reason}`)
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())

        message.channel.send(pEmbed)


        module.exports.help = {
            name: "ban"
        }

    
}