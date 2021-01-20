const {Client,} = require('discord.js');
const { play, stop } = require('./commands');
const bot = new Client();

bot.login(process.env.token);
bot.on('ready', () => console.log("On!"));

bot.on('message', (msg)=>{
      if(msg.author.bot) return;

    const prefix = '?';
    if (!msg.content.startsWith(prefix)) return;

    const commandName = getCommandName(prefix, msg.content);
    const args = getCommandArgs(prefix, msg.content);

    if (commandName === 'play')
    return play(msg, args);
    else if (commandName ==='stop')
    return stop(msg, args);

    if (commandName === 'ferlassen')
    const vc = msg.member.voice.channel;
    await vc.leave();

    if (commandName === 'Join')
    const vc = msg.member.voice.channel;
    await vc.join();



});

function getCommandName(prefix, content) {
    return content
    .slice(prefix.length)
    .split(' ')[0];
}

function getCommandArgs(prefix, content) {
    return content
    .slice(prefix.length)
    .split(' ')
    .slice(1);
}