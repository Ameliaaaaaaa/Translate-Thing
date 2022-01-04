const { Collection } = require('discord.js');
const { readdirSync } = require('fs');

function loadInteractions(client) {
    client.interactions = new Collection();
    client.toRegister = [];

    readdirSync(`./bot/interactions`).forEach(interaction => {
        if (interaction.endsWith('.js')) {
            const inter = require(`../interactions/${interaction}`);

            client.interactions.set(inter.name.toLowerCase(), inter);

            client.toRegister.push({
                name: inter.name.toLowerCase(),
                description: inter.description,
                options: inter.args
            });
        }
    });
}

module.exports = { loadInteractions };
