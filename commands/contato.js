const Discord = require('discord.js');

exports.run = async (client, message) => {
    message.delete().catch(O_o => {});
    message.channel.send({embed: {
        color: ('RANDOM'),
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
        },
        title: "Entre em contato comigo",
        description: `>Encontrou algum problema? \n>Tem alguma sugestão de comando? \n>Tem alguma duvida? \n>Você pode falar comigo pelo discord <@594251581789044756>`
    }});
}