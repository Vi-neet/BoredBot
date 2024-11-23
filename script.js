const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the bot is ready, run this code
client.once("ready", () => {
  console.log("Bot is ready!");
});

// Listen for messages
client.on("messageCreate", async (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Check if the message is "!bored" or "!activity"
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

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
