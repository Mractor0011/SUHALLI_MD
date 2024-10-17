const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos,Nigeria";
global.github=process.env.GITHUB|| "https://github.com/efeurhobopatricia/SUHALLI_MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://chat.whatsapp.com/J33KwFYkLERK39SEqaxYRB" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ" 


global.devs = "2349168023704" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349168023704";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_30_10_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU0NoNE9hUm9jemNWR09lYkxSOUFKWnJ4N3NFRCs4QkszSTM3VmZUbldPND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODExMjY0NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZGMDA2QUI4QThDN0E0QTAxRTNGQ0E4RDE4MTUwNDA5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTEzNTgxMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI4MTEyNjQ3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTQ1N0Q5QTdFRUM2NUNEM0Y4NTI0Q0UzMjY4RDY0OTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5MTM1ODEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjgxMTI2NDcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2M0IyMzQ2MjZFRjI0QjA1NDdDRjZGQzIwNEY3OTlCRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkxMzU4MTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODExMjY0NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUwNTdBN0JBMzY1NkUxOTFGRkM2REMwREZFNDk5REZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTEzNTgxM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUWE9HU0dRb1JWbUs5NElFWFRNaXlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQyYjg1ZTMyLTcxOGUtNDRkMS1hNDk4LWYwYzdkZTE1MmVkMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAxNTAsXG4gICAgICAyMjUsXG4gICAgICAyOSxcbiAgICAgIDE3MixcbiAgICAgIDEwMyxcbiAgICAgIDIwNSxcbiAgICAgIDIwLFxuICAgICAgMyxcbiAgICAgIDE1NixcbiAgICAgIDE2NCxcbiAgICAgIDExMyxcbiAgICAgIDIzLFxuICAgICAgOCxcbiAgICAgIDY1LFxuICAgICAgNjEsXG4gICAgICA4NyxcbiAgICAgIDEyOCxcbiAgICAgIDE3LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDEwMSxcbiAgICAgIDI0MCxcbiAgICAgIDE0OSxcbiAgICAgIDIyNSxcbiAgICAgIDEzNSxcbiAgICAgIDkyLFxuICAgICAgOTQsXG4gICAgICAyMjcsXG4gICAgICAxOTgsXG4gICAgICA4MyxcbiAgICAgIDMwLFxuICAgICAgNTksXG4gICAgICAxODgsXG4gICAgICAxOTMsXG4gICAgICAxOTksXG4gICAgICA4NixcbiAgICAgIDkxLFxuICAgICAgMTY1LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIksyVkRMMU5GXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyODExMjY0NzA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODU5NjQzNDA5MDQxODU6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEci4xMTIyXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZ2dVdNUXZZbkN1QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6a2gyY29Cc0pvdldZZzIzS20xenZHTkc3aFovWEdnaTBUdlcvT2lHWlFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkcxVjFKeklRRGJKajdBK1RZNzk1VDJZVjFBNjlOaVVQSlZZV2FpaTNma2ducHNqM2pXdktBenl4Z21BUyszaTk3djF3UUxZU2o1ODVoWWhvaGJWU0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9sZHIwWElnakV2SWZBRkJ3YVQ0ZUVBOG1yOVdIN0R3RXZGc212ZjUvYklkRm5rSEtjOW1wWmFOcUphM3l5eHFRV0x2R08zS3BEUmUwWGZXU2E1Y2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI4MTEyNjQ3MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkxMzU4MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEUFBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURQUC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ 』```", //*『sᴜʙsᴄʀɪʙᴇ • SUHALLI_MD』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "D",
  ownername:process.env.OWNER_NAME|| "ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
