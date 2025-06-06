require("dotenv").config();
const { Client } = require("discord.js-selfbot-v13");
const express = require("express");

const client = new Client();
const token = process.env.DISCORD_TOKEN || "";

if (!token) {
    console.error("DISCORD_TOKEN is not defined in the .env file.");
    process.exit(1);
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}`);
    client.user.setPresence({ status: "online" });
});

client.on("error", console.error);
client.on("warn", console.warn);
client.on("shardError", error => {
    console.error("WebSocket shard error:", error);
});

client.login(token).catch(err => {
    console.error("Login failed:", err);
});

const app = express();

app.get("/", (req, res) => {
    res.send("Selfbot is running.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Web server started on http://0.0.0.0:${PORT}`);
});
