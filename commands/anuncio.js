const Discord = require('discord.js')

exports.run = (bot, message, args) => {
    let splirtarg = args.join (" ").split (" / ");
    if (!message.member.permissions.has("MANAGE_MESSAGES")){

        const soraya = client.users.cache.get('594251581789044756');
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando')
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
        return message.reply(embed)
    }

let aTitle = splitarg[0];
let aAnnouncement = splitarg[1];

let aEmbed = Discord.RichEmbed()

const soraya = client.users.cache.get('594251581789044756');
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`${message.author.username}`)
.setDescription('forneça um número de até 100 mensagens a serem excluídas')
.setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());

let aChannel = bot.channels.get("712550062210678854")
try {
    aChannel.send(aEmbed);
}   catch (error){
    console.log(error);
    message.channel.send(error);

}
}

exports.help = {
    name: "anunciar"
}