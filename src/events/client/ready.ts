import discord from 'discord.js';
import utils from '../../utils/main';
import Api from '../../api/main';

export default class Ready {
	public name: string = "ready";

	async listener(bot): void {
		new Api(bot);
		["config", "database", "tools"].forEach((x) => {
			const file = require(`../../core/client/imports/${x}.ts`).default;
			if(file) file(bot);
		});
	}
}