const { Client, GatewayIntentBits } = require('discord.js-selfbot-v13');

const token = process.env.TOKEN;

if (!token) {
  console.error("Error: Please set your Discord token in the TOKEN environment variable.");
  process.exit(1);
}

const client = new Client({
  checkUpdate: false,
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(token).catch(err => {
  console.error('Failed to login:', err);
  process.exit(1);
});
