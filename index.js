const { Client } = require('discord.js-selfbot-v13');
const keepAlive = require('./keep_alive.js');

keepAlive();

// Your token from environment variable
const token = process.env.TOKEN;

async function loginAccount(token) {
  if (!token) {
    console.error("Please add your token to the environment variables.");
    return;
  }

  const client = new Client({ checkUpdate: false });

  try {
    await client.login(token);
    console.clear();
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setPresence({ status: 'online', activities: [] }); // Show online only
  } catch (err) {
    console.error(`Failed to log in:`, err.message);
  }
}

loginAccount(token);
