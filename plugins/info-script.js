let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*Untuk melihat harga script silahkan klik tombol dibawah*`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'http://yf-shop.epizy.com'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
