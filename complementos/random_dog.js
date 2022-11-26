let fetch = require('node-fetch') 
 let handler  = async (m, { conn, text }) => { 
 try { 
 let res = await fetch('https://random.dog/woof.json') 
 let json = await res.json() 
 if (json.status) throw json 
 let caption = ` 
 _Un perrito_ 🐕 
 *Black_Bot* 
 `.trim() 
 conn.sendFile(m.chat, json.url, 'dog.jpg', caption, m) 
 } catch (e) { 
 console.log(e) 
 throw '*[❗] 𝙴𝚁𝚁𝙾𝚁*' 
 }} 
 handler.help = ['dog'] 
 handler.tags = ['general'] 
 handler.command = /^dog$/i 
 handler.fail = null 
 module.exports = handler
