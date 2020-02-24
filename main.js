const config = require('./local/config.js');
const token = config.bot.token;
const prefix = config.bot.prefix;

const discord = require('discord.js');
let client = new discord.Client()

client.on('ready', () => {
    console.log('\033[2J'); // Send special character that clears screen

    // Set client presence
    client.user.setPresence({ game: { name: config.bot.gameName }, status: 'online'}) //set bot's status
        .then()
        .catch(console.error);
    
    console.log("Announcer is ready!");
    console.log("Running on account " + client.user.tag);
});

client.on("message", (message => {
    if (message.author.bot) return; //Ignore other bots 

    let LowerContent = message.content.toLowerCase(); // Get message content in lowercase and put it in a var

    if (LowerContent.startsWith(prefix + "announce ")) {
        if (!message.member.roles.find(r => r.name === config.bot.allowedRoleName)) return; // Stop running command if user doesn't have unb-mod

        let PingType = "none"; // define ping type. no ping by default

        commandContent = message.content.slice(prefix.length + 9); // get command content without the actual command
        if (commandContent.startsWith("--everyone")) {
            PingType = "everyone"; // if the flag --everyone is there, set ping type to ping everyone
            contentToAnnounce = commandContent.slice(11); // get the message it should announce
        } else if (commandContent.startsWith("--here")) {
            PingType = "here"; // if the flag --here is there, set ping type to ping here
            contentToAnnounce = commandContent.slice(7); // get the message it should announce
        } else {
            contentToAnnounce = commandContent; // if no ping flag, just set the content it should announce to the command content
        }

        var Embed = new discord.RichEmbed() // make the embed
        .setDescription(contentToAnnounce)
        .setTimestamp(Date.now());

        if (PingType == "everyone") {
            message.channel.send("@everyone", Embed); //send the announcement
        } else if (PingType == "here") {
            message.channel.send("@here", Embed); //send the announcement
        } else {
            message.channel.send(Embed); //send the announcement
        }
    }
}));

client.login(token); // log in to discord