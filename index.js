require("dotenv").config();
const { Client } = require("discord.js-selfbot-v13");

const client = new Client();
const token = process.env.DISCORD_TOKEN;

if (!token) {
    console.error("DISCORD_TOKEN is not defined in the .env file.");
    process.exit(1);
}

client.on("ready", () => {
    console.log(`${client.user.username} is now online!`);
    client.user.setPresence({
        status: "online", 
    });
});

client.on("error", console.error);
client.on("warn", console.warn);

client.login(token).catch(err => {
    console.error("Login failed:", err);
});
