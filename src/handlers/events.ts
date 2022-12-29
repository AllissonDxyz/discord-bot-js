import { Client } from 'discord.js';
import { readdirSync } from 'fs';
import utils from '../utils/main';

export default async function EventHandler(bot: Client): void {
    const load = (dirs: String) => {
        const events = readdirSync(`./src/events/${dirs}/`).filter(d => d.endsWith('.ts'));

        for (let file of events) {
            const eventFile = require(`../events/${dirs}/${file}`).default;
            const event = new eventFile();
            bot.on(event.name, (...args:any) => new eventFile().listener(...args, bot));
        };
    };

    Promise.resolve(readdirSync(`./src/events/`).forEach((folders: array) => load(folders))).then(() => {
        utils.logger(`${bot.commands.size} Eventos carregados com sucesso.`);
    });
}