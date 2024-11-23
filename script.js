const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


client.once("ready", () => {
  console.log("Bot is ready!");
});


client.on("messageCreate", async (message) => {
 
  if (message.author.bot) return;


  if (
    message.content.toLowerCase() === "!bored" ||
    message.content.toLowerCase() === "!activity"
  ) {
    try {
      const response = await fetch(
        "https://apis.scrimba.com/bored/api/activity"
      );
      const data = await response.json();
      message.reply(data.activity);
    } catch (error) {
      console.error("Error:", error);
      message.reply("Sorry, I couldn't fetch an activity right now!");
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
