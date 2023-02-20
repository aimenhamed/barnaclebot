const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageButton, MessageActionRow } = require("discord.js");
const { getMentions } = require("../utils");

const foundButton = new MessageButton({
  style: "PRIMARY",
  label: "Game started",
  customId: "foundButton",
});

const dodgedButton = new MessageButton({
  style: "SECONDARY",
  label: "Game dodged",
  customId: "dodgedButton",
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("queue")
    .setDescription("Notifies the Barnacle Boys that we are now queuing.")
    .addSubcommand((sc) =>
      sc.setName("start").setDescription("Starts queue notifier.")
    )
    .addSubcommand((sc) =>
      sc.setName("stop").setDescription("Notifies the queue has stopped.")
    ),
  async execute(interaction) {
    const mentions = getMentions();
    if (interaction.options.getSubcommand() === "start") {
      await interaction.reply(`Now queuing! ${mentions}`);
    } else if (interaction.options.getSubcommand() === "stop") {
      await interaction.reply({
        components: [
          new MessageActionRow({
            components: [...[foundButton], ...[dodgedButton]],
          }),
        ],
      });
    } else {
      await interaction.reply(`Now queuing! ${mentions}`);
    }
  },
};
