const Discord = require('discord.js');
const client = new Discord.Client();
const colors = require('colors')
client.login('ODMzMjk2MDM0MzIyMDU1MjE4.YHwRaA.FWwufGTk1MpEh71MQUDC8wIht74');
const fetch = require('node-fetch');

  
client.once('ready', () => {
	console.log('Amie joins the party!'.rainbow);
});

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
	.setImage('https://media1.tenor.com/images/9ea72ef078139ced289852e8a4ea0c5c/tenor.gif?itemid=7537923');
    message.channel.send(ByeEmbed)};

    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    if (message.content.toLowerCase() === 'a.cat') {
        const CatEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`Hey ${message.author.username}! This is your new cat!`)
	.setDescription('Take good care of it!')
	.setImage(file);
    message.channel.send(CatEmbed)
       } 
   
       if (message.content.toLowerCase() === 'a.help') {
        const HelpEmbed = new Discord.MessageEmbed()
	.setColor('ffb1f3')
	.setTitle(`Hey ${message.author.username}! These are my commands:`)
	.setDescription
    (`𝕀ℕ𝕋𝔼ℝ𝔸ℂ𝕋𝕀𝕆ℕ:
      
      𝟏. [𝐡𝐢/𝐛𝐲𝐞 𝐚𝐦𝐢𝐞] => 𝐈 𝐰𝐢𝐥𝐥 𝐬𝐚𝐲 "𝐡𝐢/𝐛𝐲𝐞" 𝐛𝐚𝐜𝐤 𝐭𝐨 𝐲𝐨𝐮!
      
      𝕄𝔼𝔻𝕀𝔸:
      
      𝟮. [𝗮.𝗰𝗮𝘁] => 𝗶 𝘄𝗶𝗹𝗹 𝗴𝗶𝘃𝗲 𝘆𝗼𝘂 𝗮 𝗻𝗲𝘄 𝗰𝗮𝘁!
      
      >>> 𝐖𝐞 𝐚𝐫𝐞 𝐬𝐭𝐢𝐥𝐥 𝐰𝐨𝐫𝐤𝐢𝐧𝐠 𝐨𝐧 𝐧𝐞𝐰 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬, 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐬𝐡𝐚𝐫𝐞 𝐲𝐨𝐮𝐫 𝐢𝐝𝐞𝐚𝐬 𝐢𝐧 𝐁𝐞𝐚𝐮'𝐬 𝐃𝐌! <<<`)

	.setImage('https://media1.tenor.com/images/faf07a7acbb1763daccee59733e4443e/tenor.gif?itemid=5769459')
    message.channel.send(HelpEmbed)}
    
       }

    

    
);
