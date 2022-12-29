import { client } from 'discord.js';
import { readdirSync } from 'fs';
import utils from '../utils/main';

export default async function CommandHandler(bot: Client): void {
    const load = (dirs: string) => {
        const commands = readdirSync(`./src/commands/${dirs}/`).filter(d => d.endsWith('.ts'));

        for (let file of commands) {
            const command = require(`../commands/${dirs}/${file}`).default;
            const cmd = new command();
            bot.commands.set(cmd.config.name, cmd.execute);
        };
    };

    Promise.resolve(readdirSync('./src/commands/').forEach((folders: array) => load(folders))).then(() => {
        utils.logger(`${bot.commands.size} comandos carregados com sucesso.`);
    });
}