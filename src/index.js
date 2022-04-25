require("dotenv").config();
const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
})

// client.on('interactionCreate', async (interaction) => {
//     if(!interaction.isCommand()) return;

//     const { commandName } = interaction;
//     if(commandName == "test"){
//         await interaction.reply("Hello World!");
//     }
// });

client.on('messageCreate', async (message) => {
    if(message.content == "!test"){
        await message.reply("Hello World!");
    }
})

client.login(process.env.DISCORD_BOT_TOKEN);