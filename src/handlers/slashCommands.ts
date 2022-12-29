import { readdirSync } from 'fs';
import utils from '../utils/main';

export default async function SlashCommandHandler(bot): void {
    readdirSync("./src/slashCommands/").forEach((dir: string) => {
            const commands = readdirSync(`./src/slashCommands/${dir}/`).filter(file => file.endsWith(".ts"));

            for (let file of commands) {
                const slashFile = require(`../slashCommands/${dir}/${file}`).default;
                const cmd = new slashFile();
                bot.slashCommands.set(cmd.config.data.name, cmd);
            }

            utils.logger(`${commands.length} slashCommands carregados com sucesso.`);
    });
}