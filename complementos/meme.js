let axios = require("axios") 
 let handler = async (m, {command, conn}) => { 
 let res = await axios(pickRandom(meme)) 
 let json = res.data 
 let url = json.url 
 conn.sendButtonImg(m.chat, url, `_${command}_`.trim(), author, 'Mas Memes 🤣', `/${command}`, m)} 
 handler.command = /^(meme)$/i 
 module.exports = handler 
  
 function pickRandom(list) { 
 return list[Math.floor(list.length * Math.random())]} 
  
 const meme = [ 
 "https://meme-api.herokuapp.com/gimme/memesparaguay", 
 "https://meme-api.herokuapp.com/gimme/mememexico", 
 "https://meme-api.herokuapp.com/gimme/memeslatam", 
 "https://meme-api.herokuapp.com/gimme/memeslatinoamerica", 
 "https://meme-api.herokuapp.com/gimme/latammemes", 
 "https://meme-api.herokuapp.com/gimme/memeslatinoamerica", 
 "https://meme-api.herokuapp.com/gimme/latammemes", 
 "https://meme-api.herokuapp.com/gimme/memesmexico", 
 "https://meme-api.herokuapp.com/gimme/memeparaguay", 
 "https://meme-api.herokuapp.com/gimme/memeslatam", 
 "https://meme-api.herokuapp.com/gimme/memesmexico", 
 "https://meme-api.herokuapp.com/gimme/mememexico", 
 "https://meme-api.herokuapp.com/gimme/memeslatam", 
 "https://meme-api.herokuapp.com/gimme/memeslatinoamerica", 
 "https://meme-api.herokuapp.com/gimme/latammemes", 
 "https://meme-api.herokuapp.com/gimme/memeslatinoamerica", 
 "https://meme-api.herokuapp.com/gimme/latammemes", 
 "https://meme-api.herokuapp.com/gimme/memesmexico", 
 "https://meme-api.herokuapp.com/gimme/memeparaguay", 
 "https://meme-api.herokuapp.com/gimme/memeslatam" 
 ]
