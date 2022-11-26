let fs = require('fs') 
 let handler = async (m, { conn, usedPrefix }) => { 
 let pp = './Menu2.jpg' 
 let taguser = '@' + m.sender.split("@s.whatsapp.net")[0] 
 let menu = ` 
 ╭══〘❉❉❉❉❉❉❉❉〙═╮ 
 ║≡≡≡≡≡≡≡≡≡≡≡≡≡≡ 
 ║➤ *✨𝗛ola, ${taguser} ¿cómo está? Espero que bien :)* 
 ║➤ *Versión Del Bot* : 1.2 
 ║➤ *Usuario* ${taguser} 
 ║➤ *Prefijo Usado:*  ${usedPrefix} 
 ║≡≡≡≡≡≡≡≡≡≡≡≡≡≡ 
 ╰══╡❉❉❉❉❉❉❉❉╞══╯ 
 ┏━━━━━━━━━━━━━┓ 
 ┃ *< COMANDOS DE BLACK_BOT >* 
 ┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡ 
 ┣ ඬ⃟👻 _a_ 
 ┣ ඬ⃟👻 _${usedPrefix}cat_ 
 ┣ ඬ⃟👻 _${usedPrefix}dog_ 
 ┣ ඬ⃟👻 _${usedPrefix}meme_ 
 ┣ ඬ⃟👻 _${usedPrefix}logos_ 
 ┣ ඬ⃟👻 _${usedPrefix}runtime_ 
 ┣ ඬ⃟👻 _${usedPrefix}infohost_ 
 ┣ ඬ⃟👻 _${usedPrefix}on welcome_ 
 ┣ ඬ⃟👻 _${usedPrefix}off welcome_ 
 ┣ ඬ⃟👻 _${usedPrefix}ig *[url]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}mediafire *[url]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}tiktok *[url]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}sticker *[url]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}attp *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}attp2 *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}attp3 *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}ttp *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}ttp2 *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}ttp3 *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}ttp4 *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}ttp5 *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}wikipedia *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}google *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}imagen *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}play *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}play2 *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}play3 *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}invocar *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}ytsearch *[texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}getaud *[url]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}getvid *[url]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}ytmp3 *[url]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}ytmp4 *[url]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}tts *[lenguaje] [texto]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}toimg *[sticker]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}sticker *[imagen]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}tourl *[imagen]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}tourl *[video]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}tourl *[audio]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}fat *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}bass *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}blown *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}deep *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}fast *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}robot *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}slow *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}tupai *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}vibra *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}nightcore *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}earrape *[nota de voz]*_ 
 ┣   👻 _${usedPrefix}reverse *[nota de voz]*_ 
 ┣ ඬ⃟👻 _${usedPrefix}smooth *[nota de voz]*_ 
 ┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡ 
 ┃ *< OWNER >* 
 ┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡ 
 ┣ ඬ⃟😈 _${usedPrefix}update_ 
 ┣ ඬ⃟😈 _${usedPrefix}banchat_ 
 ┣ ඬ⃟😈 _${usedPrefix}unbanchat_ 
 ┗━━━━━━━━━━━━━┛ 
 `.trim() 
 let buttons = [ 
 { buttonId: '#owner', buttonText: { displayText: '💫 𝐎𝐖𝐍𝐄𝐑 💫' }, type: 1 }, 
 { buttonId: '# black que hora es ?', buttonText: { displayText: ' 🕗 Que Hora es ? 🕗' }, type: 1 }, 
 { buttonId: '#black cogemos ?', buttonText: { displayText: ' 😏 Cogemos ? 😏 ' }, type: 1 }] 
 let buttonMessage = { 
 image: fs.readFileSync('./Menu2.jpg'), 
 caption: menu.trim(), 
 mentions: [m.sender], 
 footer: `*${wm}*`, 
 buttons: buttons, 
 headerType: 4, 
 contextInfo: { 
 mentionedJid: [m.sender], 
 externalAdReply: { 
 showAdAttribution: true, 
 mediaType: 'VIDEO', 
 mediaUrl: null, 
 title: '👑 ༒𝐌⃟𝐔𝐓𝐈𝐕𝐄𝐑𝐒𝐄🜲𝐁𝐎𝐓༒ 👑', 
 body: null, 
 thumbnail: fs.readFileSync('./src/logo.png'), 
 sourceUrl: `Pornhub.com` 
 }}} 
 conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
 } 
 handler.help = ['menu', 'help', '?'] 
 handler.tags = ['general'] 
 handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i 
 handler.fail = null 
 module.exports = handler
