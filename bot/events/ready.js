module.exports = {
    event: 'ready',

    async execute(client) {
        await client.user.setActivity({ name: 'Translations.', type: 'WATCHING' });

        client.utils.registerInteractions(client, client.toRegister).then(r => {
            console.log('[Bot] Interactions Registered.');
        });

        console.log('[Bot] Ready.');
    }
}
