let { mediafiredl } = require('@bochilteam/scraper') 
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
 if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*` 
 try { 
 let res = await mediafiredl(args[0]) 
 let { url, url2, filename, ext, aploud, filesize, filesizeH } = res 
 m.reply(global.wait) 
 conn.sendMessage(m.chat, { document: { url: url }, mimetype: ext, fileName: filename}, {quoted: m})    
 } catch (e) { 
 m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\n\n*- 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝚂𝙴𝙰 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\n*◉ https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*') 
 }} 
 handler.help = ['mediafire'].map(v => v + ' <url>') 
 handler.tags = ['downloader'] 
 handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i 
 module.exports = handler
