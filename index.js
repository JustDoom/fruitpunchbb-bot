const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot On');

    client.user.setActivity('yes');
});

client.login('Nzk2NTk5NzEyMTE0Mjc4NDIw.X_aRSw.GHqDFcw4P3N1QUthQbcui0ubEBA');