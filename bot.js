const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon-v2');
const client = new Discord.Client();

const PREFIX = process.env.PREFIX;

const music = new Music(client, {
    youtubeKey: process.env.BOT_YOUTUBE_TOKEN,
    botPrefix: PREFIX,
    ownerOverMember: true,
    botOwner: 'MrSmooK#9756',
    djRole:'MrSmooK#9756'
});

client.login(process.env.BOT_TOKEN);
