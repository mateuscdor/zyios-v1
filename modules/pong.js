(async () => {
	switch (command) {
		case "peng": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Ping\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Shows ping speed of ${LangG.title}.`);
				return;
			}
			timestampe = speed();
			latensie = speed() - timestampe;
			const pong = `
*boom📍* ${latensie.toFixed(4)} ms`;
			citel.reply(pong);
		}
		break;
	}
})()
