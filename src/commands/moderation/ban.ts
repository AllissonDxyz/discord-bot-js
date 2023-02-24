import { 
	EmbedBuilder, 
	SlashCommandBuilder, 
	PermissionFlagsBits
 } from 'discord.js';
import emoji from '../../assets/emojis/emojis';

export default class Ban {
	public config = {
		data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('puna um membro')
		.addUserOption(option => 
			option
			.setName("usuário")
			.setDescription("usuário a ser banido")
			.setRequired(true))
		.addStringOption((option) => 
			option
			.setName("motivo")
			.setDescription("Motivo do banimento")
			.setRequired(false))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
	};

	async execute({bot, interaction, args, utils}) {
		const target = interaction.options.getUser("usuário");
		const reason = interaction.options.getString("Motivo") ?? "Sem motivo";

		if(target.id == interaction.user.id) {
			return interaction.reply("Você não pode banir si mesmo.");
		}

        member.ban({ reason: motivo}).then(() => {
        	const embed = new EmbedBuilder()
        		.setColor(bot.color)
        		.setTitle(`${target.tag} banido.`)
        		.setFooter({text: interaction.user.tag, iconURL: interaction.user.avatarURL({ dynamic: true })})
        	interaction.followUp({embeds: [ embed]});
       	}).catch((err) => {
       		interaction.reply("Houve um erro ao banir este memebro");
       	});
	}
}