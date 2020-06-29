const Discord = require("discord.js");
const bot = new Discord.Client();
const fetch = require('node-fetch');


let msg = await message.channel.send("Buscando um meme, aguarde um segundo!");
fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(json => {
        let embed = new Discord.RichEmbed()
            .setTitle(json.title)
            .setImage(json.url)
            .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
        msg.edit(embed)
    });
