const Discord = require('discord.js');
const client = new Discord.Client();
const colors = require('colors')
client.login('ODMzMjk2MDM0MzIyMDU1MjE4.YHwRaA.FWwufGTk1MpEh71MQUDC8wIht74');
const fetch = require('node-fetch');
const fs = require('fs')


client.once('ready', () => {
	console.log('Amie joins the party!'.rainbow);
    client.user.setActivity('a.help', { type: 'LISTENING' });
});

client.on('guildMemberAdd', member => {
        const WelcomeEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`Another cutie has joined us!, ${message.author.username} 💞🍓`)
	.setDescription('Welcome to Amie\'s lounge!')
	.setImage('https://media.tenor.com/images/57c5a224b9de1f3df0c3029233ac60e6/tenor.gif');
    member.guild.channels.get('833041325300514818').send(WelcomeEmbed)}); 


client.on('message', async message => {

    
	if (message.content.toLowerCase() === 'hi amie') {        
        const HeyEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`Hey, ${message.author.username}!`)
	.setDescription('You are looking great today! <3')
	.setImage('https://media1.tenor.com/images/9ea72ef078139ced289852e8a4ea0c5c/tenor.gif?itemid=7537923');
    message.channel.send(HeyEmbed)};
    
    if (message.content.toLowerCase() === 'bye amie') {        
        const ByeEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`Bye, ${message.author.username}!`)
	.setDescription('See you later! <3')
	.setImage('https://media1.tenor.com/images/ecc2f3fb40f9b16ee94f76765bc34662/tenor.gif?itemid=21053629');
    message.channel.send(ByeEmbed)};

    if (message.content.toLowerCase() === 'i love you amie') {
        const LoveEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`I love you too, ${message.author.username}! 💞🍓`)
	.setDescription('<3')
	.setImage('https://media1.tenor.com/images/52471e5ee4d2c953127091efac41de23/tenor.gif?itemid=14541113');
    message.channel.send(LoveEmbed)};
    
    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    if (message.content.toLowerCase() === 'a.cat') {
        const CatEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`Hey ${message.author.username}! This is your new cat!`)
	.setDescription('Take good care of it!')
	.setImage(file);
    message.channel.send(CatEmbed)
       } 
    if (message.content.toLowerCase() === 'a.daddy') {
        const DaddyEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`Hey ${message.author.username}! I think i found your father!`)
	.setDescription('Is this him?')
	.setImage('https://images.fatherly.com/wp-content/uploads/2017/04/dogsbaddads-header.jpg?q=65&enable=upscale&w=600');
    message.channel.send(DaddyEmbed)
    }

    if (message.content.toLowerCase() === 'a.help') {
        const HelpEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`Hey ${message.author.username}! These are my commands:`)
	.setDescription
    (`𝕀ℕ𝕋𝔼ℝ𝔸ℂ𝕋𝕀𝕆ℕ:
      
      𝟏. [𝐡𝐢/𝐛𝐲𝐞 𝐚𝐦𝐢𝐞] => 
      𝐈 𝐰𝐢𝐥𝐥 𝐬𝐚𝐲 "𝐡𝐢/𝐛𝐲𝐞" 𝐛𝐚𝐜𝐤 𝐭𝐨 𝐲𝐨𝐮!

      𝟐. [𝐢 𝐥𝐨𝐯𝐞 𝐲𝐨𝐮 𝐚𝐦𝐢𝐞] => 
      𝐈 𝐰𝐢𝐥𝐥 𝐥𝐨𝐯𝐞 𝐲𝐨𝐮 𝐛𝐚𝐜𝐤!
      
      𝕄𝔼𝔻𝕀𝔸:
      
      𝟏. [𝐚.𝐜𝐚𝐭] => 
      𝐈 𝐰𝐢𝐥𝐥 𝐠𝐢𝐯𝐞 𝐲𝐨𝐮 𝐚 𝐧𝐞𝐰 𝐜𝐚𝐭!

      𝟐. [𝐚.𝐝𝐚𝐝𝐝𝐲] =>
      𝐃𝐢𝐝 𝐲𝐨𝐮 𝐥𝐨𝐬𝐞 𝐲𝐨𝐮𝐫 𝐟𝐚𝐭𝐡𝐞𝐫? 𝐈 𝐰𝐢𝐥𝐥 𝐟𝐢𝐧𝐝 𝐡𝐢𝐦!

      𝟑. [𝐚.𝐦𝐨𝐧𝐤𝐞] =>
      𝐈 𝐰𝐢𝐥𝐥 𝐭𝐫𝐲 𝐭𝐨 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐌𝐫. 𝐌𝐨𝐧𝐤𝐞 𝐟𝐨𝐫 𝐲𝐨𝐮!
      
      >>> 𝐖𝐞 𝐚𝐫𝐞 𝐬𝐭𝐢𝐥𝐥 𝐰𝐨𝐫𝐤𝐢𝐧𝐠 𝐨𝐧 𝐧𝐞𝐰 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬, 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐬𝐡𝐚𝐫𝐞 𝐲𝐨𝐮𝐫 𝐢𝐝𝐞𝐚𝐬 𝐢𝐧 𝐁𝐞𝐚𝐮'𝐬 𝐃𝐌!`)

	.setImage('https://media1.tenor.com/images/faf07a7acbb1763daccee59733e4443e/tenor.gif?itemid=5769459')
    message.channel.send(HelpEmbed)}
    
    if (message.content.toLowerCase() === 'a.penguin') {
        const PenguinEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`Hey ${message.author.username}! Are these the guys you were looking for?`)
	.setDescription('I found them eating snow....')
	.setImage('https://i.pinimg.com/564x/db/81/68/db81681fa7e381805a47f538e08b6839.jpg');
    message.channel.send(PenguinEmbed)
    }
    
    if (message.content.toLowerCase() === 'a.monke') {
        const MonkeEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`Sorry ${message.author.username}, Mr. Monke is not available`)
	.setDescription('He is looking at some hot chicks on tinder....')
	.setImage('https://media1.tenor.com/images/5bf5d5910259c0f6d0a3ba5496352191/tenor.gif?itemid=17406753');
    message.channel.send(MonkeEmbed)
    }

});
