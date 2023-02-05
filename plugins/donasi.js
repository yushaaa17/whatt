import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./qr.png');
    let img2 = `https://i.postimg.cc/DyB3TtLG/20230121-120408-0000.png`
    return conn.sendButton(m.chat, '', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/oh_pahadd",
                mediaType: "VIDEO",
                title: 'Donasi To YushaBotz17 ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler