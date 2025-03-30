require("dotenv").config();
const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

const token = process.env.DISCORD_TOKEN;

client.on("ready", () => {
    console.log(`${client.user.username} is now online!`);
    client.user.setPresence({
        activities: [{ name: "on PC", type: "PLAYING" }],
        status: "online",
    });
});

client.login(token);
