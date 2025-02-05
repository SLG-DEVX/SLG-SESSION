const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Fredie_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function FREDI_TECH_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Fredie_Tech = Fredie_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Fredie_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Fredie_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Fredie_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Fredie_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);

     await delay(800);
console.log("transformation de la credential");
          const output = await pastebin.createPasteFromFile(data);
                                                  const b64data = 'SLG-MD~' + output.split('https://pastebin.com/')[1]   

 /*      let b64data = Buffer.from(data).toString('base64'); */
               let session = await Pair_Code_By_Fredie_Tech.sendMessage(Pair_Code_By_Fredie_Tech.user.id, { text: '' + b64data });

               let FREDI_TECH_TEXT = `

*_Pair Code Connected by SLG_*

_____________________________________
╭━━━━━━━━━━━━━╮
┃         *『SLG-MD』*
┃        
┃ _vous  avez franchis la première étape pour déployer SLG-MD._
┃                      
╰━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━╮
┃                      
┃  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
┃ꪶ ུ۪۪.   *Ytube:* _(coming soon)_
┃ꪶ ུ۪۪.   *Owner:* _wa.me/237693755398_
┃                     
╰━━━━━━━━━━━━━╯
_____________________________________

_Don't Forget To Give Star To My Repo_ `
 Pair_Code_By_Fredie_Tech.sendMessage(Pair_Code_By_Fredie_Tech.user.id,{text:FREDI_TECH_TEXT},{quoted:session})

const response = await Pair_Code_By_Fredie_Tech.groupAcceptInvite("CSqEpYznHjG8iS4wSJCKfz")
console.log("joined to: " + response)


        await delay(100);
        await Pair_Code_By_Fredie_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FREDI_TECH_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await FREDI_TECH_PAIR_CODE()
});
module.exports = router