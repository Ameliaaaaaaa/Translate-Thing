<p align="center">
    <img src="https://readme-jokes.vercel.app/api"/>
</p>

# Translate Thing
A bot that instantly translates messages on Discord.

# Setup
All you need to do is install NodeJS if you do not have it already. Once you have that done, you can edit the `config.json` file.
You will then need to install all dependencies using `npm install`.
Start the bot using the `main.js` file.

```json
{
  "Discord": {
    "Token": "", Bot token.
    "Guild": "" Guild you want the bot to function in.
  },
  "Languages": {
    "es": "en", Translate From: Translate To.
    "en": "es"
  }
}

```
