const { SlashCommandBuilder } = require("@discordjs/builders");
const { getTimeDifference } = require("../utils");
const { getGame, setGame } = require("../state");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("game")
    .setDescription("Check game status")
    .addSubcommand((sc) =>
      sc
        .setName("time")
        .setDescription("Checks how long the game has been going for.")
    )
    .addSubcommand((sc) => sc.setName("end").setDescription("Ends game.")),
  async execute(interaction) {
    if (!getGame()) {
      await interaction.reply("There is no game currently active");
      return;
    }
    const time = getTimeDifference(getGame());
    if (interaction.options.getSubcommand() === "time") {
      await interaction.reply(`Game has been going for ${time}`);
    } else if (interaction.options.getSubcommand() === "end") {
      setGame(undefined);
      await interaction.reply(`Game ended with duration ${time}`);
    } else {
      await interaction.reply(`Game has been going for ${time}`);
    }
  },
};
