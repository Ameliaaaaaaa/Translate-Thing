module.exports = {
    event: 'interactionCreate',

    async execute(client, interaction) {
        if (interaction.isContextMenu()) {
            const lang = interaction.commandName;

            const from = lang.split(' - ')[0];
            const to = lang.split(' - ')[1];

            const message = interaction.options.getMessage('message');

            await interaction.reply({ content: `${await client.utils.translate(from, to, message.content)}`, ephemeral: true });
        }

        if (interaction.isCommand()) {
            const cmdName = interaction.commandName.toLowerCase();

            if (!client.interactions.has(cmdName)) return;

            const command = client.interactions.get(cmdName);

            await command.execute(client, interaction);
        }
    }
}
