const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "A-S-W-I-N-S-P-A-R-K-Y:55b179b399c33fafafef5a556e087469", //your session id
MV_SEND_JID: process.env.MV_SEND_JID || "94743747913@s.whatsapp.net", //default movie send group
MODE: process.env.MODE || "public", //private or inbox or groups
AUTO_AI: process.env.AUTO_AI || "on", //on or off
AUTO_AI_JID: process.env.AUTO_AI_JID || "94743747913@s.whatsapp.net", //auto ai working group
BLOCK_JID: process.env.BLOCK_JID || "", //block jids
};
