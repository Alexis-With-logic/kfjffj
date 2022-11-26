process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; 
 let { MessageType } = require('@adiwajshing/baileys') 
 let yts = require('yt-search') 
 let fs = require('fs') 
 let fetch = require('node-fetch') 
 const { servers, yta, ytv } = require('../lib/y2mate') 
 let handler = async(m, { conn, command, text, isPrems, isOwner, DevMode, args, usedPrexi }) => { 
 conn.play = conn.play ? conn.play : {} 
 if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*#play Neverita BadBunny*' 
 try { 
 let results = await yts(text) 
 let vid = results.all.find(video => video.seconds < 3600) 
 let { dl_link, thumb, title, filesize, filesizeF } = await (/2$/.test(command) ? ytv : yta)(vid.url, 'id4') 
 let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${dl_link}`)).text() 
 conn.sendFile(m.chat, thumb, 'error.jpg', ` 
 📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title} 
 *📁 𝙿𝙴𝚂𝙾:* ${filesizeF} 
 *🔗 𝚄𝚁𝙻:* ${vid.url} 
 *📥 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁:* ${shortUrl} 
 `.trim(), m, false, {  
 contextInfo: { externalAdReply: { 
 title: 'ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', 
 body: '© BlackBot',  
 sourceUrl: `https://github.com/Micasatio/BK_Bot`,  
 thumbnail: fs.readFileSync('./Menu2.jpg') }}}) 
 conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), ` 
 *📌 𝚃𝙸𝚃𝚄𝙻𝙾:* ${title} 
 *📁 𝙿𝙴𝚂𝙾:* ${filesizeF} 
 *🔗 𝚄𝚁𝙻:* ${vid.url} 
 `.trim(), m) 
 } catch { 
 try { 
  
 m.reply(`*[❗] 𝙻𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 𝙳𝙴𝙻 𝙰𝚄𝙳𝙸𝙾 / 𝚅𝙸𝙳𝙴𝙾 𝙵𝙰𝙻𝙻𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾...*\n\n*—◉ 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚀𝚄𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙻𝙰 𝙾𝙿𝙲𝙸𝙾𝙽 𝟹 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 𝚄𝚂𝙰𝙽𝙳𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*\n◉ _#play3 *[texto]*_`)   
 let res = await (await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`))     
 let json = await res.json() 
 conn.sendMessage(m.chat, { audio: { url: json.result.audio }, mimetype: 'audio/mp4', fileName: json.result.title + `.mp3`}, {quoted: m}) 
  
 } catch  { 
 m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁*') 
 }}} 
 handler.help = ['play', 'play2'].map(v => v + ' <pencarian>') 
 handler.tags = ['general'] 
 handler.command = /^play2?$/i 
 module.exports = handler
