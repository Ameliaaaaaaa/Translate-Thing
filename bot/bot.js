const { Client } = require('discord.js');

const { loadInteractions } = require('./handlers/interaction');
const utils = require('../utils');

const cfg = require('../config.json');

const client = new Client({
    intents: [],
    partials: [],
    allowedMentions: {
        parse: [],
        repliedUser: true
    },
    restGlobalRateLimit: 50,
    waitGuildTimeout: 300
});

client.utils = utils;
client.cfg = cfg;

require('./handlers/event')(client);
loadInteractions(client);

client.login(cfg.Discord.Token).then(async () => {
    console.log('[Bot] Logged In.');
});

process.on('unhandledRejection', rejection => {
    console.log('[Bot] unhandledRejection');
    console.log(rejection);
});
