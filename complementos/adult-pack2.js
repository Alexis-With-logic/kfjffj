import db from '../lib/database.js' 
 import fetch from 'node-fetch' 
 let handler = async (m, { conn, command }) => { 
 if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*' 
 let url = packgirl[Math.floor(Math.random() * packgirl.length)] 
 conn.sendButton(m.chat, `_🥵 Pack 2 🥵_`, author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m) 
 } 
 handler.help = ['pack2'] 
 handler.tags = ['internet'] 
 handler.command = /^(pack2)$/i 
 handler.register = true 
 export default handler 
  
 global.packgirl = [ 
   "https://i.imgur.com/mwLJaxU.jpg", 
   "https://i.imgur.com/9ptmlPl.jpg", 
   "https://i.imgur.com/38tVliz.jpg", 
   "https://i.imgur.com/2NqCKE3.jpg", 
   "https://i.imgur.com/pveviMG.jpg", 
   "https://i.imgur.com/d71dnkv.jpg", 
   "https://i.imgur.com/cr7Ypj1.jpg", 
   "https://i.imgur.com/jAxzCj4.jpg", 
   "https://i.imgur.com/xokuFLf.jpg", 
   "https://i.imgur.com/Hi4zLaf.jpg", 
   "https://i.imgur.com/OlaQtwW.jpg", 
   "https://i.imgur.com/Dm4GLuF.jpg", 
   "https://i.imgur.com/k6Y2E9b.jpg", 
   "https://i.imgur.com/1rk7jdu.jpg", 
   "https://i.imgur.com/TFmEVPc.jpg", 
   "https://i.imgur.com/0XefLlJ.jpg", 
   "https://i.imgur.com/bwa9LYZ.jpg", 
   "https://i.imgur.com/WgrpTmg.jpg", 
   "https://i.imgur.com/Z5f5YAw.jpg", 
   "https://i.imgur.com/xEuBtPO.jpg", 
   "https://i.imgur.com/NA0fHxn.jpg", 
   "https://i.imgur.com/InueCKQ.jpg", 
   "https://i.imgur.com/3syOcHe.jpg", 
   "https://i.imgur.com/N1dgels.jpg", 
   "https://i.imgur.com/IxKAJaV.jpg", 
   "https://i.imgur.com/8VrxL1d.jpg", 
   "https://i.imgur.com/8B4Y0bG.jpg", 
   "https://i.imgur.com/wgkGOjF.jpg", 
   "https://i.imgur.com/765Wi6q.jpg", 
   "https://i.imgur.com/5joeWnm.jpg", 
   "https://i.imgur.com/71fjmmM.jpg", 
   "https://i.imgur.com/cAuKeyZ.jpg", 
   "https://i.imgur.com/SDZ2Hs5.jpg", 
   "https://i.imgur.com/skkEyqI.jpg", 
   "https://i.imgur.com/6dXFsBW.jpg", 
   "https://i.imgur.com/6CeG9ZX.jpg" 
 ]
