const config = require('./local/config.js');
const token = config.bot.token;
const prefix = config.bot.prefix;

const discord = require('discord.js');
var client = new discord.Client()

client.on('ready', () => {
    console.log('\033[2J'); // Send special character that clears screen

    // Set client presence
    client.user.setPresence({ game: { name: "cpback.net" }, status: 'online'})
        .then()
        .catch(console.error);
    
    console.log("Announcer is ready!");
    console.log("Running on account " + client.user.tag);
});

client.login(token);