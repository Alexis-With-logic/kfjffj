function handler(m) { 
 this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m) 
 this.sendContact(m.chat, '524531106422', '💌༒𝐌⃟𝐔𝐓𝐈𝐕𝐄𝐑𝐒𝐄🜲𝐁𝐎𝐓༒💌 - Creador - Oficial 1', m) 
 this.sendContact(m.chat, '595983186566', '💌༒𝐌⃟𝐔𝐓𝐈𝐕𝐄𝐑𝐒𝐄🜲𝐁𝐎𝐓༒💌 - Creador - Oficial 2', m)
 this.sendContact(m.chat, '5493813403468', '💌༒𝐌⃟𝐔𝐓𝐈𝐕𝐄𝐑𝐒𝐄🜲𝐁𝐎𝐓༒💌 - Creador - Oficial 3', m)}
 handler.command = /^(contacto|mipapi|OFC|creador|propietario|dueño)$/i 
 module.exports = handler
