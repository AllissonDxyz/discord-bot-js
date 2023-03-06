import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';

export default class Banner {
  public config = {
    data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription('Limpe suas mensagens do chat')
    .addNumberOption(option => 
      option
      .setName("Quantia")
      .setDescription("Quantidade de mensagens a serem deletadas")
      .setRequired(true))
  };
  async execute({bot, interaction, args, utils}) {
    let quantia = args[0];
    let counter = 0;
    let cache = [];
 
    interaction.channel.messages.fetch().then(messages => {
      messages.map(msg => {
          if(msg.author.id === interaction.user.id) {
              if(counter == quantia) return interaction.channel.bulkDelete(cache, quantia, true).catch(err =>
               interaction.channel.send(`> ${emoji.error} *Houve um erro ao apagar as mensagens.*`).then(msg =>
                   utils.messageDelete(msg)));
              counter++
              cache.push(msg);
          }
      });
      interaction.followUp(`${emoji.certo} *Mensagens apagadas com sucesso.*`);
    });
  }
}