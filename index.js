console.log("DEBUG: BOT_TOKEN exists?", !!process.env.BOT_TOKEN);
require('./src/linkingHandler.js');
// Dummy HTTP server for Render
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Bot is running"));
app.listen(process.env.PORT || 3000, () => {
    console.log(`✅ Dummy web server running on port ${process.env.PORT || 3000}`);
});
