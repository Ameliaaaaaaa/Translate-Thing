const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const axios = require('axios');

const regex = /[!*();,:@&=+$.\/?%#[\]]/g;

async function registerInteractions(client, commands) {
    const rest = new REST({ version: '9' }).setToken(client.token);

    const langs = [];

    for (let lang of Object.keys(client.cfg.Languages)) {
        const from = lang;
        const to = client.cfg.Languages[from];

        langs.push({
            name: `${from} - ${to}`,
            description: null,
            type: 3,
            options: []
        });
    }

    await rest.put(Routes.applicationGuildCommands(client.user.id, client.cfg.Discord.Guild), { body: langs.concat(commands) });
}

async function translate(from, to, message) {
    const result = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&ie=UTF-8&oe=UTF-8&q=${encodeURI(message.toLowerCase().replace(regex, ''))}`);

    return result.data[0][0][0];
}

module.exports = { registerInteractions, translate };
