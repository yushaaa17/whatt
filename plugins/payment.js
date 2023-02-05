import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('November 17 2023 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let vn = `https://github.com/yushafahad17/YFBOTZ/blob/master/QRISSS_05-02-23_20-21-30-906.wav`
  conn.sendButton(m.chat, `
┏━ꕥ〔 *Donasi • Dana* 〕ꕥ━⬣
┃✾ Gopay  [087843253876]
┃✾ Dana  [085771925745]
┃✾ Ovo  [085727144288]
┃✾ Shopeepay [085771925745]
┃✾ Qris [https://tinyurl.com/4ub7527j]
┗━━━━ꕥ
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'YushaBotz17', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `Follow Instagram`, sourceUrl: 'https://instagram.com/oh_pahadd', thumbnail: await (await fetch('https://i.postimg.cc/DyB3TtLG/20230121-120408-0000.png')).buffer(),}} 
     }) 
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler
