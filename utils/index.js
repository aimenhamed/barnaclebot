module.exports = {
  getMentions() {
    const barnacleBoys = [
      {
        id: "742716750046691348",
        avatar: "f1233c98824e8b09c622ecfbe4e3feb9",
      },
      {
        id: "221914757358157825",
        username: "Lewis",
        avatar: "f08e7c84749e353750f53a1617698b50",
      },
      {
        id: "221897450468671489",
        username: "Haydn",
        avatar: "9012bf045b6a982a69dfd678f8e59b6c",
      },
    ];
    let mentions = "";
    barnacleBoys.forEach((bb) => {
      mentions += `<@${bb.id}> `;
    });
    return mentions;
  },
  getTimeDifference(time) {
    const now = new Date().getTime();
    const difference = now - time;
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // pad single-digit seconds with a leading zero
    const formattedSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
  },
};
