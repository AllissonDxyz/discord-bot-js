import { EmbedBuilder } from 'discord.js';

export default class Avatar {
	public config = {
		name: "avatar",
	};

	async execute({bot, message, args, utils}) {
		const embed = new EmbedBuilder()
            .setTitle(`Avatar de ${message.author.username}`)
            .setImage(message.author.avatarURL({dynamic: true, size: 1024}))
            .setFooter({text: message.author.tag, iconURL: message.author.avatarURL({dynamic: true})})
            .setTimestamp();
        message.reply({embeds: [embed]});
	}
}