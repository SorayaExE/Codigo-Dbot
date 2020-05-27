const {MessageEmbed} = require('discord.js')
const ms = require('ms');
module.exports={
    name: 'sorteio',
    description: 'Crie um simples sorteio',
    usage: '<tempo> <canal> <premio>',
    category: 'fun',
    run: async(bot,message,args)=>{
        if (!message.member.permissions.has("BAN_MEMBERS")){

            const aembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando')
            .setFooter('Desenvolvido por Soraya{Savanna}');
            return message.reply(aembed)
        }
        if(!args[0]){
        const bembed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Você não especificou o tempo!')
        .setFooter('Desenvolvido por Soraya{Savanna}');
        return message.channel.send(bembed)
        }
        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) 
        return message.channel.send(`Você não usou a formatação correta para o horário!`)
        if(isNaN(args[0][0])) return message.channel.send(`Isso não é um número!`)
        let channel = message.mentions.channels.first()
        if(!channel) return message.channel.send(`Não encontrei esse canal!`)
        let prize = args.slice(2).join(" ")
        if(!prize) return message.channel.send(`Você nao especificou o tempo`)
        message.channel.send(`*Sorteio criado no ${channel}*`)
        let Embed = new MessageEmbed()
        .setTitle(`Novo sorteio!`)
        .setDescription(`O ${message.author} está iniciando um sorteio e o premio é **${prize}**`)
        .setTimestamp(Date.now()+ms(args[0]))
        .setColor(`BLUE`)
        let m = await channel.send(Embed)
        m.react("🎉")
        setTimeout(() => {
            if(m.reactions.cache.get("🎉").count<=1){
                message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`)
                return message.channel.send(`Poucas pessoas reagiram para ter um vencedor!`)
            }
            
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
            channel.send(`O vencedor do sorteio que estava valendo **${prize}** é... ${winner}`)
        }, ms(args[0]));
    }
}