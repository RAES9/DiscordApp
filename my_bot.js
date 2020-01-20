const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
    var generalChannel = client.channels.get("653062780152184858") // Replace with known channel ID
    generalChannel.send("Ya estoy en linea putitos :3")  
})


client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }  
    if (receivedMessage.content.includes("Lulu" || "@Lulu")) {
        receivedMessage.channel.send("No te endiendo porque estoy bien pendeja xd buscate un amigo para hablar. Te quiero :3")
    }
    var recive = receivedMessage.toString().toUpperCase();
    if (recive.includes("PUTA" || "MIERDA" || "CEROTE" || "MANCOS" || "CULO")) {
        receivedMessage.channel.send("Cuidado con ese vocabulario zorra. Veloshito <3")
    }
    if (recive.includes("LOL")) {
        receivedMessage.channel.send("alguien dijo lol porque estoy orgasmiada por jugar. Soy un bot no puedo jugar :(")
    }
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

client.on('guildMemberAdd', member => {
    member.guild.channels.get('653062780152184858').send("Bienvenido " + member + "! Nada de estar chingando sino ban alv. Lofiu bb <3"); 
});

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    }else {
        receivedMessage.channel.send("No entinedo ni madres. prueba con `!help` o `!help` es el unico comando que tengo xd. Perdon :(")
    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("Enserio pensaste que podia ayudarte pinche pendejo :v. Amorcito :3")
    } else {
        receivedMessage.channel.send("No puedo ayudarte, intenta `!help [pregunta]`. Ty")
    }
}
// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
var bot_secret_token = "NjY4OTExMDUwOTA0ODI5OTYy.XiYKSA.G23ATo-a6im51SzShvMd9c6QY2c"

client.login(bot_secret_token)
