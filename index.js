const { Client } = require('discord.js-selfbot-v13');
const http = require('http');

const token = process.env.TOKEN;
const port = process.env.PORT || 3000; // Render sets PORT env variable

if (!token) {
  console.error("Error: Please set your Discord token in the TOKEN environment variable.");
  process.exit(1);
}

const client = new Client({
  checkUpdate: false,
  intents: ['GUILDS', 'GUILD_MESSAGES']
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(token).catch(err => {
  console.error('Failed to login:', err);
  process.exit(1);
});

// Dummy HTTP server to keep Render happy
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Selfbot running\n');
}).listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});
