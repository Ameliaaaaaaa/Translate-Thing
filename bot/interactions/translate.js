module.exports = {
    name: 'Translate',
    description: 'Translate text into another language.',
    args: [{
        name: 'from',
        type: 3,
        description: 'Language to translate from.',
        required: true,
    }, {
        name: 'to',
        type: 3,
        description: 'Language to translate to.',
        required: true,
    }, {
        name: 'text',
        type: 3,
        description: 'Text to translate.',
        required: true,
    }],

    async execute(client, interaction) {
        const from = interaction.options.getString('from').toLowerCase();
        const to = interaction.options.getString('to').toLowerCase();
        const text = interaction.options.getString('text');

        if (!Object.keys(client.cfg.Languages).includes(from) || !Object.keys(client.cfg.Languages).includes(to)) return await interaction.reply({ content: `You can translate the following languages: ${Object.keys(client.cfg.Languages).join(', ')}`, ephemeral: true });

        await interaction.reply({ content: `${await client.utils.translate(from, to, text)}`, ephemeral: true });
    }
}
