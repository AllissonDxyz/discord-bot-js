import { readdirSync } from 'fs';
import utils from '../utils/main';

export default async function SlashCommandHandler(bot): void {
    readdirSync("./src/commands/").forEach((dir: string) => {
            const commands = readdirSync(`./src/commands/${dir}/`).filter(file => file.endsWith(".ts"));

            for (let file of commands) {
                const slashFile = require(`../commands/${dir}/${file}`).default;
                const cmd = new slashFile();
                bot.commands.set(cmd.config.data.name, cmd);
            }

            utils.logger(`${commands.length} Commands load successfully.`);
    });
}