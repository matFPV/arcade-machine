const { app, BrowserWindow, ipcMain } = require('electron');
const { globalShortcut } = require('electron');
const createWindow = () => {
  ipcMain.on("number",(event,data)=>{ //Reads number var from index
    console.warn(data)
    Execounter = data;
    console.warn(Execounter)
  })  
  // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, 
            enableRemoteModule: true
        },
        autoHideMenuBar: true
    });
          mainWindow.loadFile("index.html") //loads index.html
          

         
    
};


app.whenReady().then(() => {
  createWindow(); 
  
  const { ExitKey1, ExitKey2, GameExe1, GameExe2, GameExe3, GameExe4, GameExe5, GameExe6 } = require("./Vars.js") //imports exitkeys from vars.js
  const { execFile, exec, spawn } = require('child_process');
  console.log(ExitKey1 + " + " + ExitKey2);
  
  const ret = globalShortcut.register(ExitKey1 + " + " + ExitKey2, () => { //makes globalshortcut from vars in vars.js
    console.log('CommandOrControl+X is pressed')
    //On shortcut kills game exe
    switch(Execounter){
      case 1:
        console.warn("funguje" + Execounter);
        exec("taskkill /im " + GameExe1);
        break;
      case 2:
        console.warn("funguje" + Execounter);
        exec("taskkill /im " + GameExe2);
        break;
      case 3:
        console.warn("funguje" + Execounter);
        exec("taskkill /im " + GameExe3);
        break;
      case 4:
        console.warn("funguje" + Execounter);
        exec("taskkill /im " + GameExe4);
      case 5:
        console.warn("funguje" + Execounter);
        exec("taskkill /im " + GameExe5);
      case 6:
        console.warn("funguje" + GameExe6);
        exec("taskkill /im " + Game);
      default:
        break;
    }
  })
  });    
