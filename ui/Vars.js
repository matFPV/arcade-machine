
//Paths
var AsphyxiaPath = "C:\\Users\\kryvas\\Downloads\\asphyxia-core-win-x64\\asphyxia.exe"
var SDVX3Path = "C:\\sdvx\\spice2.lnk"
var SDVX4Path = ""
var SDVX5Path = ""
var browser = "brave.exe"
//Keys
var KeyUp = "KeyW"
var KeyDown = "KeyS"
var KeyLeft = "KeyA"
var KeyRight = "KeyD"
var KeyStart = "KeyE"
var ExitKey1 = "G"       // Only add uppercase name of the key without "Key" part  example: "KeyA" becomes "A"
var ExitKey2 = "H"       // Only add uppercase name of the key without "Key" part  example: "KeyA" becomes "A"
    
if(module) // kdyz to neimportujes pres require tak module bude undefined
module.exports = { ExitKey1, ExitKey2 };
