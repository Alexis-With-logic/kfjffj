export async function all(m, conn) { 
 let texto 
 let user = global.db.data.users[m.sender]   
 if (!m.message) 
 return 
 if (!user.antispam) 
 return !0 
 if (+new Date() > user.antispam) { 
 let tiempo = 60000 * 1 
 setTimeout(() => { 
 user.banned = false 
 texto = `*[❗] @${m.sender.split("@")[0]} 𝙵𝚄𝙴 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙳𝙴𝚂𝙿𝚄𝙴𝚂 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙳𝚄𝚁𝙰𝙽𝚃𝙴 ${tiempo / 1000 - 59} 𝙼𝙸𝙽𝚄𝚃𝙾, 𝚈𝙰 𝙽𝙾 𝙷𝙰𝙶𝙰𝚂 𝚂𝙿𝙰𝙼!!!*` 
 this.sendButton(m.chat, texto, wm, null, [['☘️ 𝗠 𝗘 𝗡 𝗨', '#menu']], m, { mentions: this.parseMention(texto) })}, tiempo)         
 user.antispam = null 
 }}
