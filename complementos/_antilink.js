let handler = m => m 
  
 let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i 
 handler.before = async function (m, { user, isBotAdmin, isAdmin }) { 
   if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true 
   let chat = global.DATABASE.data.chats[m.chat] 
   let isGroupLink = linkRegex.exec(m.text) 
  
   if (chat.antiLink && isGroupLink) { 
     await m.reply(`*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒」*\n*𝙷𝙰𝚂𝚃𝙰 𝙻𝙰 𝚅𝙸𝚂𝚃𝙰 𝙱𝙰𝙱𝚈, ${await this.getName(m.sender)} rompiste las reglas serás exterminado....!!*`) 
     await m.reply(`*Tienes 5 segundos para eliminar el link y retractarte...!!!!*`) 
     await m.reply(`*5!!*`)
     await m.reply(`*4!!*`)
     await m.reply(`*3!!*`) 
     await m.reply(`*2!!*`) 
     await m.reply(`*1!!*`) 
     if (isAdmin) return m.reply('*𝚃𝙴 𝚂𝙰𝙻𝚅𝙰𝚂𝚃𝙴 𝙿𝙴𝚁𝚁𝙰 𝙴𝚁𝙴𝚂 𝙰𝙳𝙼𝙸𝙽, 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁𝚃𝙴 :v*') 
     if (!isBotAdmin) return m.reply('*El bot no es admin, no puede exterminar a las personas*') 
     let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat)) 
     let isLinkThisGc = new RegExp(linkGC, 'i') 
     let isgclink = isLinkThisGc.test(m.text) 
     if (isgclink) return m.reply('*Lol.. enviaste el enlace de este grupo :v*') 
     await this.groupRemove(m.chat, [m.sender]) 
   } 
   return true 
 }
