const { app, BrowserWindow } = require('electron');

const createWindow = () => {
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
    mainWindow.loadFile("index.html") //loadne index.html
};


app.whenReady().then(() => {
    createWindow();
});    
