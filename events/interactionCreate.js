const { getMentions } = require("../utils");
const { setGame } = require("../state");

module.exports = {
  once: false,
  name: "interactionCreate",
  execute(interaction) {
    if (interaction.customId === "foundButton") {
      setGame(new Date().getTime());
      interaction.reply(`Game started! ${getMentions()}`);
    } else if (interaction.customId === "dodgedButton") {
      interaction.reply(`Game was dodged ${getMentions()}`);
    }
  },
};
