
/********************************************
*DORRAT-BOT-MD POR DIEGO-OFC*
/********************************************/
importar momento desde 'moment-timezone'
importar fs, {promesas} de 'fs'
importar buscar desde 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
probar {
let vn = './media/menu.mp3'
let pp = './galeria/menudorrat3.jpg'
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
sea ​​d = nueva fecha (nueva fecha + 3600000)
let locale = 'es'
let semana = d.toLocaleDateString(locale, { día de la semana: 'largo' })
let date = d.toLocaleDateString(locale, { día: 'numérico', mes: 'largo', año: 'numérico' })
let _uptime = proceso.uptime() * 1000
let uptime = clockString(_uptime)
let {dinero} = global.db.data.users[m.sender]
let { exp, limit, dorracoins, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
m.reply(`╭──────────────────  
│⏱️ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐌𝐄𝐍𝐔...
╰──────────────────`)
let str = `
*══〘 🔥⚡🔥⚡🔥⚡🔥〙═══╮*
*║ ▢ 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃*
*║ ▢* ${ucapan()}
*║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋*
*║ ▢ ❤𝐇𝐎𝐋𝐀, ${taguser}❤*
*║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋*
*║ ▢ 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐃𝐄𝐋 𝐁𝐎𝐓: ${nombre del creador}*
*║ ▢ 𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄𝐋 𝐂𝐑𝐄𝐀𝐃𝐎𝐑: wa.me/593959425714 (𝐍𝐎 𝐁𝐎𝐓)*
*║ ▢ 𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 𝐎𝐅𝐈𝐂𝐈𝐀𝐋: wa.me/573122695406 (𝐎𝐅𝐈𝐂𝐈𝐀𝐋 𝐃𝐄 𝐃𝐎𝐑𝐑𝐀𝐓)*
*║ ▢ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 » ${vs}*
*║ ▢ 𝐅𝐄𝐂𝐇𝐀 » ${semana}, ${fecha}*
*║ ▢ 𝐓𝐈𝐄𝐌𝐏𝐎 𝐀𝐂𝐓𝐈𝐕𝐎 » ${tiempo de actividad}*
*║ ▢ 𝐋𝐈𝐁𝐑𝐀𝐑𝐘 » ${biblioteca}*
*║ ▢ 𝐋𝐄𝐍𝐆𝐔𝐀𝐉𝐄 » 𝐄𝐒𝐏𝐀𝐍̃𝐎𝐋*
*║ ▢ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 » ${Object.keys(global.db.data.users).length}*
*╰══╡🔥⚡🔥⚡🔥⚡🔥╞══╯*

*═〔* información *〕⬣═*
*║👤 NOMBRE: ${taguser}
*║🧰 EXPERIENCIA ➟ ${exp}*
*║⚓ RANGO ➟* ${rol}
*║💎 DIAMANTES ➟ ${límite}*
*║🪙 DORRAT-COINS ➟ ${dorracoins}*
*╰══*═════════════ *✧*

*╭━〔 INFORMACIÓN DE DORR∆T-BOT 〕━⬣*
 ┃ 🔰 _${usedPrefix}grupos_
 ┃ 🔰 _${usedPrefix}estado_
 ┃ 🔰 _${usedPrefix}instalarbot_
 ┃ 🔰 _${prefijousado}infobot_
 ┃ 🔰 _${usedPrefix}grouplist_
 ┃ 🔰 _${usedPrefix}propietario_
 ┃ 🔰 _${prefijousado}script_
 ┃ 🔰 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
 *╰━━━━━━━━━━━━⬣*

*╭━〔 REPORTAR COMANDO 〕━⬣*
┃ *Reporta con este comando de haber*
┃ *Fallas para poder Solucionar!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💌 _${usedPrefix}informe *texto*_
┃ 💌 _${usedPrefix}informe *texto*_
*╰━━━━━━━━━━━━⬣*

┏━━━━━━━━━━━━━┓
┃ *<UNE UN BOT A TU GRUPO/>*
║≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋
┣ ➱🤖 _${usedPrefix}join *link del grupo*_
┣ ➱🛡️ _*mínimo 30 miembros*_
┗━━━━━━━━━━━━━┛

┌──「🖥️𝐒𝐄𝐑𝐁𝐎𝐓 - 𝐉𝐀𝐃𝐈𝐁𝐎𝐓」─
├➢🤖 _${usedPrefix}serbot_
├➢🤖 _${usedPrefix}stop_
├➢🤖 _${usedPrefix}bots_
└────ׂ─ׂ─ׂ─ׂ───

┌──「🌱𝐑𝐏𝐆」─
├➢🪴${usedPrefix}aventura
├➢🪴${usedPrefix}saldo
├➢💐${usedPrefix}reclamación
├➢🌱${usedPrefix}arriba
├➢🥀${usedPrefix}subir de nivel
├➢🍃${usedPrefix}myns
├➢🪴${usedPrefix}perfil
├➢💐${usedPrefix}trabajo
├➢🌱${usedPrefix}minar
├➢🥀${usedPrefix}comprar
├➢🍃${usedPrefix}buyall
├➢🪴${usedPrefix}transfer <tipo> <cantidad> <@tag
├➢🌱${usedPrefix}verificar
├➢🌱${usedPrefix}unreg <número de serie>
└────ׂ─ׂ─ׂ─ׂ───

┌──「🎮𝐆𝐀𝐌𝐄」─
├➢🌠${usedPrefix}suitpvp <@etiqueta>
├➢🎡${usedPrefix}mates <novato/fácil/medio/difícil/extremo/imposible/imposible2>
├➢🎪${usedPrefix}ppt <papel / tijera /piedra
├➢🎾${usedPrefix}prostituto <nombre / @tag
├➢⛳${usedPrefix}prostituta <nombre / @tag
├➢⚓${usedPrefix}hetero <nombre / @tag
├➢🥌${usedPrefix}gay2 <nombre / @tag
├➢🪀${usedPrefix}lesbiana <nombre / @tag
├➢🔫${usedPrefix}pajero <nombre / @tag
├➢🕹️${usedPrefix}pajera <nombre / @tag
├➢🧩${usedPrefix}puto <nombre / @tag
├➢🎮${usedPrefix}puta <nombre / @tag
├➢🪁${usedPrefix}manco <nombre / @tag
├➢🪃${usedPrefix}manca <nombre / @tag
├➢🎱${usedPrefix}rata <nombre / @tag
├➢🎯${usedPrefix}amor <nombre / @tag
├➢🏹${usedPrefix}doxear <nombre / @tag
├➢🥏${usedPrefix}pregunta <texto
├➢🛹${usedPrefix}slot <apuesta
├➢🎳${usedPrefix}simi <texto
├➢♟️${usedPrefix}topgays
├➢🏓${usedPrefix}topotakus
├➢🎲${usedPrefix}formar pareja
├➢🔰${usedPrefix}formarpareja5
├➢🛡️${usedPrefix}amistad
├➢🪄${usedPrefix}verdad
├➢🎾${usedPrefix}reto
└────ׂ─ׂ─ׂ─ׂ───

┌「🕋𝐏𝐑𝐄𝐍𝐃𝐄𝐑 𝐘 𝐀𝐏𝐀𝐆𝐀𝐑」
├➢✅${usedPrefix}habilitar *bienvenido*_
├➢❎${usedPrefix}deshabilitar *bienvenido*_
├➢✅${usedPrefix}activar *modohorny*_
├➢❎${usedPrefix}deshabilitar *_modohorny*
├➢✅${usedPrefix}activar *antienlace*_
├➢❎${usedPrefix}deshabilitar *antienlace*_
├➢✅${usedPrefix}activar *antienlace2*_
├➢❎${usedPrefix}deshabilitar *antienlace2*_
├➢✅${usedPrefix}activar *detectar*_
├➢❎${usedPrefix}deshabilitar *detectar*_
├➢✅${usedPrefix}activar *audios*_
├➢❎${usedPrefix}deshabilitar *audios*_
├➢✅${usedPrefix}activar *etiqueta automática*_
├➢❎${usedPrefix}deshabilitar *autosticker*_
├➢✅${usedPrefix}activar *antiview una vez*_
├➢✅${usedPrefix}habilitar *antitraba*_
├➢❎${usedPrefix}desactivar *antitraba*_
├➢✅${usedPrefix}activar *antiárabe*_
├➢❎${usedPrefix}desactivar *antiárabe*_
└────ׂ─ׂ─ׂ─ׂ───

┌─「💻𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑」
├➢📑${usedPrefix}facebook <enlace/enlace/url
├➢🗃️${usedPrefix}instagram <enlace/link/url
├➢🗂️${usedPrefix}mediafire <enlace/enlace/url
├➢📰${usedPrefix}instagram <enlace/link/url
├➢📇${usedPrefix}gitclone <enlace/enlace/url
├➢📑${usedPrefix}tiktok <enlace/link/url
├➢🗃️${usedPrefix}ytmp3 <enlace/enlace/url
├➢🗂️${usedPrefix}ytmp4 <enlace/enlace/url
├➢📰${usedPrefix}play.1 <texto/enlace/link/url
├➢📇${usedPrefix}play.2 <texto/enlace/link/url
├➢📑${usedPrefix}reproducir <texto
├➢🗃️${usedPrefix}spotify <texto
├➢🗂️${usedPrefix}imagen <texto
├➢📰${usedPrefix}pinteret <texto
├➢📇${usedPrefix}fondo de pantalla <texto
├➢📑${usedPrefix}wallpaper2 <texto
├➢🗃️${usedPrefix}pptiktok <nombre de usuario
├➢🗂️${usedPrefix}igstalk <nombre de usuario
├➢📰${usedPrefix}tiktokstalk <nombre de usuario
└────ׂ─ׂ─ׂ─ׂ──

┌──「🏢𝐆𝐑𝐎𝐔𝐏」─
├➢💎${usedPrefix}add *<número>*
├➢💎${usedPrefix}kick <@tag
├➢💎${usedPrefix}resetlink
├➢💎${usedPrefix}encuesta *<texto>
├➢💎${usedPrefix}votar *<texto>*
├➢💎${usedPrefix}listadv
├➢💎${usedPrefix}delaadvertencia <@tag
├➢💎${usedPrefix}advertencia <@tag
├➢💎${usedPrefix}grouptime *<opcion> <tiempo>*_
├➢💎${usedPrefix}grupo <abrir / cerrar
├➢💎${usedPrefix}promover <@etiqueta
├➢💎${usedPrefix}degradar <@etiqueta
├➢💎${usedPrefix}banchat
├➢💎${usedPrefix}desbancar chat
├➢💎admins *<texto>_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├➢💎${usedPrefix}degradar <@etiqueta
├➢💎${usedPrefix}grupo de información
├➢💎${usedPrefix}enlace
├➢💎${usedPrefix}setname <texto
├➢💎${usedPrefix}setdesc <texto
├➢💎${usedPrefix}invocar <texto
├➢💎${usedPrefix}setwelcome <texto
├➢💎${usedPrefix}setbye <texto
├➢💎${usedPrefix}hidetag <texto
├➢💎${usedPrefix}simular <bienvenido / adiós / ascender / degradar >
├➢💎${usedPrefix}destraba
└────ׂ─ׂ─ׂ─ׂ───

┌──「🛡️𝐆𝐈𝐓𝐇𝐔𝐁」─
├➢/instalarbot
└────ׂ─ׂ─ׂ─ׂ───

┌──「🎑𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒」
├➢🧧 _${usedPrefix}togifaud *<responde a un video>*_
├➢🧧 _${usedPrefix}toimg *<responde a un sticker>*_
├➢🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
├➢🧧 _${usedPrefix}toptt *<responde a un video/audio>*_
├➢🧧 _${usedPrefix}tovideo *<responde a un sticker>*_
├➢🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
├➢🧧 _${usedPrefix}tts es *<texto>*_
└────ׂ─ׂ─ׂ─ׂ───

┌──「📑𝐋𝐎𝐆𝐎𝐒」─
├➢📌${usedPrefix}logos <efecto <texto
├➢🧧${usedPrefix}tarjeta SIM <@etiqueta
├➢🧨${usedPrefix}hornycard <@etiqueta
├➢📌${usedPrefix}lolice <@etiqueta
├➢🧧${usedPrefix}ytcomment <texto
├➢🧨${usedPrefix}es tan estúpido
├➢📌${usedPrefix}pixelar
├➢🧨${usedPrefix}desenfoque
└────ׂ─ׂ─ׂ─ׂ───


┌──「🌹𝐅𝐫𝐚𝐬𝐞𝐬 𝐲 𝐭𝐞𝐱𝐭𝐨𝐬」─
├➢🥀 _${usedPrefix}piropo_
├➢🥀 _${usedPrefix}consejo_
├➢🥀 _${usedPrefix}fraseromantica_
├➢🥀 _${usedPrefix}historiaromantica_
└────ׂ─ׂ─ׂ─ׂ──

┌──「⛩️𝐀𝐍𝐈𝐌𝐄𝐒」─
├➢🎎${usedPrefix}cristianoronaldo
├➢🌃${usedPrefix}messi
├➢💒${usedPrefix}meme
├➢⛪${usedPrefix}irritante
├➢🏰${usedPrefix}blackpink
├➢🕌${usedPrefix}kpop <blackpink / exo / bts
├➢🎑${usedPrefix}lolivid
├➢⛩️${usedPrefix}loli
├➢🎎${usedPrefix}navidad
├➢🌃${usedPrefix}pppareja
├➢💒${usedPrefix}neko
├➢⛪${usedPrefix}waifu
├➢🏰${usedPrefix}akira
├➢🕌${usedPrefix}akiyama
├➢🎑${usedPrefix}ana
├➢⛩️${usedPrefix}asuna
├➢🎎${usedPrefix}ayuzawa
├➢🌃${usedPrefix}boruto
├➢💒${usedPrefix}chiho
├➢⛪${usedPrefix}chitoge
├➢🏰${usedPrefix}deidara
├➢🕌${usedPrefix}erza
├➢🎑${usedPrefix}elaina
├➢⛩️${usedPrefix}eba
├➢🎎${usedPrefix}emilia
├➢🌃${usedPrefix}hestia
├➢💒${usedPrefix}hinata
├➢⛪${usedPrefix}inori
├➢🏰${usedPrefix}isuzu
├➢🕌${usedPrefix}itachi
├➢🎑${usedPrefix}itori
├➢⛩️${usedPrefix}kaga
├➢🎎${usedPrefix}kagura
├➢🌃${usedPrefix}kaori
├➢💒${usedPrefix}keneki
├➢⛪${usedPrefix}kotori
├➢🏰${usedPrefix}kurumi
├➢🕌${usedPrefix}madara
├➢🎑${usedPrefix}mikasa
├➢⛩️${usedPrefix}miku
├➢🎎${usedPrefix}minato
├➢🌃${usedPrefix}naruto
├➢💒${usedPrefix}nezuko
├➢⛪${usedPrefix}sagiri
├➢⛪${usedPrefix}Sasuke
├➢🎑${usedPrefix}sakura
├➢🌃${usedPrefix}cosplay
└────ׂ─ׂ─ׂ─ׂ───

┌──「🔞𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +𝟏𝟖」
├➢🔞 _${usedPrefix}paquete_
├➢🔞 _${prefijousado}paquete2_
├➢🔞 _${prefijousado}paquete3_
├➢🔞 _${prefijousado}videoxxx_
├➢🔞 _${prefijousado}tiktokxxx_
├➢🔞 _${usedPrefix}tetas_
├➢🔞 _${usedPrefix}botín_
├➢🔞 _${usedPrefix}ecchi_
├➢🔞 _${usedPrefix}furro_
├➢🔞 _${usedPrefix}imagenlesbianas_
├➢🔞 _${usedPrefix}bragas_
├➢🔞 _${usedPrefix}pene_
├➢🔞 _${usedPrefix}porno_
├➢🔞 _${prefijousado}aleatorioxxx_
├➢🔞 _${usedPrefix}pechos_
├➢🔞 _${prefijousado}yaoi_
├➢🔞 _${prefijousado}yaoi2_
├➢🔞 _${prefijousado}yuri_
├➢🔞 _${prefijousado}yuri2_
├➢🔞 _${usedPrefix}trapito_
├➢🔞 _${prefijousado}hentai_
├➢🔞 _${usedPrefix}nsfwloli_
├➢🔞 _${usedPrefix}nsfworgy_
├➢🔞 _${usedPrefix}nsfwfoot_
├➢🔞 _${usedPrefix}nsfwass_
├➢🔞 _${prefijousado}nsfwbdsm_
├➢🔞 _${usedPrefix}nsfwcum_
├➢🔞 _${usedPrefix}nsfwero_
├➢🔞 _${usedPrefix}nsfwfemdom_
├➢🔞 _${usedPrefix}nsfwglass_
└────ׂ─ׂ─ׂ─ׂ──

┌──「𝐄𝐟𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐚𝐮𝐝𝐢𝐨𝐬」
├➢*-
├➢🎤 _${usedPrefix}bajo_
├➢🎤 _${usedPrefix}soplado_
├➢🎤 _${usedPrefix}profundo_
├➢🎤 _${usedPrefix}oreja_
├➢🎤 _${usedPrefix}rápido_
├➢🎤 _${usedPrefix}fat_
├➢🎤 _${usedPrefix}noche nocturna_
├➢🎤 _${usedPrefix}reverse_
├➢🎤 _${usedPrefix}robot_
├➢🎤 _${usedPrefix}lento_
├➢🎤 _${usedPrefix}suave_
├➢🎤 _${usedPrefix}tupai_
└────ׂ─ׂ─ׂ─ׂ──

┌「◾𝐂𝐡𝐚𝐭 𝐚𝐧𝐨𝐧𝐢𝐦𝐨」
├➢📳 _${prefijousado}inicio_
├➢📳 _${usedPrefix}siguiente_
├➢📳_${usedPrefix}leave_
└────ׂ─ׂ─ׂ─ׂ──

┌「🔍𝐁𝐮𝐬𝐜𝐚𝐫」
├➢🔍 _${usedPrefix}apkpure <*texto*>
├➢🔍 _${usedPrefix}covid <*país*>
├➢🔍 _${usedPrefix}playstore <*texto*>
├➢🔍 _${usedPrefix}stickersearch *<texto>*_
├➢🔍 _${usedPrefix}xnxxsearch *<texto>*_
├➢🔍 _${usedPrefix}info de anime *<texto>*_
├➢🔍 _${usedPrefix}google *<texto>*_
├➢🔍 _${usedPrefix}letra *<texto>*_
├➢🔍 _${usedPrefix}wikipedia *<texto>*_
├➢🔍 _${usedPrefix}ytsearch *<texto>*_
├➢🔍 _${usedPrefix}apkdone *<texto>*_
├➢🔍 _${usedPrefix}apkgoogle *<texto>*_
├➢🔍 _${usedPrefix}apkmody *<texto>*_
├➢🔍 _${usedPrefix}apkshub *<texto>*_
├➢🔍 _${usedPrefix}happymod *<texto>*_
├➢🔍 _${usedPrefix}hostapk *<texto>*_
├➢🔍 _${usedPrefix}revdl *<texto>*_
├➢🔍 _${usedPrefix}toraccino *<texto>*_
├➢🔍 _${usedPrefix}uapkpro *<texto>*_
└────ׂ─ׂ─ׂ─ׂ──

┌「🎵𝐀𝐔𝐃𝐈𝐎𝐒」
├➢✅_𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *,.)
├➢✅_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
├➢▶️ _Quien es tu sempai botsito 7w7_
├➢▶️ _Te diagnostico con gay_
├➢▶️ _A nadie le importa_
├➢▶️ _Fiesta del administrador_
├➢▶️ _Fiesta del administrador_
├➢▶️ _Vivan los novios_
├➢▶️ _Feliz cumpleaños_
├➢▶️ _No digas mamadas Mariyein_
├➢▶️ _Noche de paz_
├➢▶️ _Buenos días_
├➢▶️ _Cámbiate a Movistar
├➢▶️ _Bienvenido_
├➢▶️ _Calla fan de bts_
├➢▶️ _Las reglas del grupo_
├➢▶️ _Buenos tardes_
├➢▶️ _Buenos noches_
├➢▶️ _Audio hentai_
├➢▶️ _Chica grande_
├➢▶️ _Feliz navidad_
├➢▶️ _Vete a la vrg_
├➢▶️ _Pasa pack Bot_
├➢▶️ _Atención grupo_
├➢▶️_Marica quien_
├➢▶️ _Murio el grupo_
├➢▶️ _Oh me vengo_
├➢▶️ _tio que rico_
├➢▶️ _Viernes_
├➢▶️ _Baneado_
├➢▶️ _Sexo_
├➢▶️ _Hola_
├➢▶️ _Un pato_
├➢▶️_Nyanpasu_
├➢▶️ _Te amo_
├➢▶️ _Yamete_
├➢▶️ _Bañate_
├➢▶️ _Es puto_
├➢▶️ _La biblia_
├➢▶️ _Onichan_
├➢▶️ _Mierda de Bot_
├➢▶️ _Siuuu_
├➢▶️ _Epico_
├➢▶️ _Poste de mierda_
├➢▶️ _Rawr_
├➢▶️ _UwU_
├➢▶️ _:(
├➢▶️ _a_
└────ׂ─ׂ─ׂ─ׂ──


┌──「🛠️𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒」─
├➢🛠️ _${usedPrefix}captura *<enlace de la página>*_
├➢🛠️ _${usedPrefix}horario_
├➢🛠️ _${usedPrefix}encuestas texto|texto_
├➢🛠️ _${usedPrefix}afk *<motivo>*_
├➢🛠️ _${usedPrefix}ocr *<responde una imagen>*_
├➢🛠️ _${usedPrefix}tamaño *<cantidad> <responde una imagen / video>*_
├➢🛠️ _${usedPrefix}acortar *<enlace/link/url>*_
├➢🛠️ _${usedPrefix}calc *<operación matemática>*_
├➢🛠️ _${usedPrefix}del *<responder a mensaje del Bot>*_
├➢🛠️ _${usedPrefix}whatmusic *<responde a un audio>*_
├➢🛠️ _${usedPrefix}qrcode *<texto>*_
├➢🛠️ _${usedPrefix}leer más *<texto1| texto2>*_
├➢🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
├➢🛠️ _${usedPrefix}styletext *<texto>*_
├➢🛠️ _${usedPrefix}traducir *<texto>*_
├➢🛠️ _${usedPrefix}nowa *<número>*_
└────ׂ─ׂ─ׂ─ׂ───

┌──「🌌𝐒𝐓𝐈𝐂𝐊𝐄𝐑」─
├➢🌠 _${usedPrefix}sticker *<responder a imagen o video>*_
├➢🌠 _${usedPrefix}pegatina *<enlace/link/url>*_
├➢🌠 _${usedPrefix}s *<responde una imagen o video>*_
├➢🌠 _${usedPrefix}s *<enlace/link/url>*_
├➢🌠 _${usedPrefix}sfull *<responder a imagen o video>*_
├➢🌠 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
├➢🌠 _${usedPrefix}scircle *<responde una imagen>*_
├➢🌠 _${usedPrefix}sremovebg *<responde una imagen>*_
├➢🌠 _${usedPrefix}semoji *<tipo> <emoji>*_
├➢🌠 _${usedPrefix}attp *<texto>*_
├➢🌠 _${usedPrefix}attp2 *<texto>*_
├➢🌠 _${usedPrefix}attp3 *<texto>*_
├➢🌠 _${usedPrefix}ttp *<texto>*_
├➢🌠 _${usedPrefix}ttp2 *<texto>*_
├➢🌠 _${usedPrefix}ttp3 *<texto>*_
├➢🌠 _${usedPrefix}ttp4 *<texto>*_
├➢🌠 _${usedPrefix}ttp5 *<texto>*_
├➢🌠 _${usedPrefix}pat *<@etiqueta>*_
├➢🌠 _${usedPrefix}slap *<@etiqueta>*_
├➢🌠 _${usedPrefix}beso *<@etiqueta>*_
├➢🌠 _${usedPrefix}dado_
├➢🌠 _${usedPrefix}wm *<nombre del paquete> <autor>*_
├➢🌠 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
├➢🌠 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
└────ׂ─ׂ─ׂ─ׂ───

┌──「💎𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓」─
├➢👑 > *<función>*
├➢👑 => *<función>*
├➢👑 $ *<función>*
├➢👑 _${usedPrefix}backup_
├➢👑 _${usedPrefix}cajafuerte_
├➢👑 _${usedPrefix}blocklist_
├➢👑 _${usedPrefix}bloque *<@etiqueta>*
├➢👑 _${usedPrefix}desbloquear *<@tag>*
├➢👑 _${usedPrefix}activar *restringir*_
├➢👑 _${usedPrefix}deshabilitar *restringir*_
├➢👑 _${usedPrefix}activar *lectura automática*_
├➢👑 _${usedPrefix}deshabilitar *lectura automática*_
├➢👑 _${usedPrefix}habilitar *público*_
├➢👑 _${usedPrefix}deshabilitar *público*_
├➢👑 _${usedPrefix}habilitar *pconly*_
├➢👑 _${usedPrefix}deshabilitar *pconly*_
├➢👑 _${usedPrefix}habilitar *gconly*_
├➢👑 _${usedPrefix}deshabilitar *gconly*_
├➢👑 _${usedPrefix}activar *antillamada*_
├➢👑 _${usedPrefix}deshabilitar *antillamada*_
├➢👑 _${usedPrefix}activar *antiprivado*_
├➢👑 _${usedPrefix}deshabilitar *antiprivado*_
├➢👑 _${usedPrefix}msg *<texto>*_
├➢👑 _${usedPrefix}banchat_
├➢👑 _${usedPrefix}unbanchat_
├➢👑 _${usedPrefix}banuser *<@etiqueta>*_
├➢👑 _${usedPrefix}unbanuser *<@tag>*_
├➢👑 _${usedPrefix}banuser *<@etiqueta>*_
├➢👑 _${usedPrefix}bc *<texto>*_
├➢👑 _${usedPrefix}bcchats *<texto>*_
├➢👑 _${usedPrefix}bcgc *<texto>*_
├➢👑 _${usedPrefix}cleartpm_
├➢👑 _${usedPrefix}restart_
├➢👑 _${usedPrefix}update_
├➢👑 _${usedPrefix}traba1_
├➢👑 _${usedPrefix}addprem *<@etiqueta>*_
├➢👑 _${usedPrefix}delprem *<@etiqueta>*_
├➢👑 _${usedPrefix}listprem_
└────ׂ─ׂ─ׂ─ׂ───
 ━━━━━━━━━━━━━━━━━━━━━━━━━
┃𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃 𝐁𝐘 𝐃𝐈𝐄𝐆𝐎-𝐎𝐅𝐂┃
 ━━━━━━━━━━━━━━━━━━━━━━━━━
`.recortar()
dejar botones = [
{ buttonId: '#grupos', buttonText: { displayText: '🔰 𝙶𝚁𝚄𝙿𝙾𝚂 🔰' }, type: 1 },
{ buttonId: '#propietario', buttonText: { displayText: '🤴 𝙾𝚆𝙽𝙴𝚁 🤴' }, tipo: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '📦 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 📦' }, type: 1 }]
let botónMensaje = {
imagen: imagen4,
título: str.trim(),
menciona: [m.remitente],
pie de página: `*${wm}*`,
botones: botones,
tipo de encabezado: 4,
información de contexto: {
mencionadoJid: [m.sender],
Respuesta de publicidad externa: {
showAdAtribución: verdadero,
tipo de medio: 'VIDEO',
mediaUrl: nulo,
título:'👑 𝐃𝐎𝐑𝐑𝐀𝐓-𝐁𝐎𝐓-𝐌𝐃 👑',
cuerpo: nulo,
miniatura: nulo,
URL de origen: `https://chat.whatsapp.com/LlAbJM659dOBVJnxOIMl9h`
}}}
conn.sendMessage(m.chat, buttonMessage, { citado: m })
//esperar conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} captura {
Conn.Reply (M.Chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menúcompleto|menú completo|todomenú)$/i
manejador.exp = 50
controlador.fallo = nulo
controlador predeterminado de exportación
function cadena de reloj(ms) {
sea ​​h = isNaN(ms) ? '--': Math.piso (ms / 3600000)
sea ​​m = isNaN(ms) ? '--': Math.piso (ms / 60000) % 60
sea ​​s = isNaN(ms) ? '--': Math.piso (ms / 1000) % 60
devuelve [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

función ucapán() {

  const time = moment.tz('America/Los_Angeles').format('HH') //America/Los_Angeles Asia/Jakarta America/Toronto

  let res = "🌉Buenas madrugadas"

  si (tiempo >= 4) {

    res = "🌇Buenos Días"

  }

  si (tiempo >= 11) {

    res = "🏙️Buenas tardes"

  }

  si (tiempo >= 15) {

    res = "🌆Buenas tardes"

  }

  si (tiempo >= 17) {

    res = "🌃Buenas noches"

  }

  volver res

}
