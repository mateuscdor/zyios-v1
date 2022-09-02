(async () => {
	switch (command) {
		case "adreq":
		case "joireq": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Report\n*🍀Aliases* ${
                prefix + command
              }\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              } bug \n\n*📚Description:* Sends bug to the Real Secktor developers.`);
				return;
			}
			if (!text) return citel.reply(`Gib ein Problem oder eine Frage an den Admins an\n\n${command} Menu Error `);
			Void.sendMessage(`120363041430505197@g.us`, {
				text: `*Anfrage von:* wa.me/${citel.sender.split("@")[0]}
Support Anfrage: ${text}`,
			});
			reply(`Anfrage wurde an mein owner geschickt ${LangG.title} Team. bitte hab etwas Geduld !`);
		}
		break;
		case "request": {
			if (querie === "help") {
				await citel.reply(`*❗Command:*   Request\n*🍀Aliases* ${command}\n*🧩Category:* Moderation\n*🛠️Usage:* ${
                prefix + command
              } request text\n\n*📚Description:* Sends your request to main ${
                LangG.title
              } developers.`);
				return;
			}
			if (!args.join(" ")) return reply(`Example : ${
                prefix + command
              } bitte gib ein problem an`);
			textt = `*| REQUEST |*`;
			teks1 = `\n\n*User* : @${
            citel.sender.split("@")[0]
          }\n*Request* : ${args.join(" ")}`;
			teks2 = `\n\n*Hii ${pushname},Deine anfrage wird bearbeitet*.\n*Please wait.......*`;
			for (let i of owner) {
				Void.sendMessage(i + "@s.whatsapp.net", {
					text: textt + teks1,
					mentions: [citel.sender],
				}, {
					quoted: citel,
				});
			}
			Void.sendMessage(citel.chat, {
				text: textt + teks2 + teks1,
				mentions: [citel.sender],
			}, {
				quoted: citel,
			});
		}
		break;
	}
})()
