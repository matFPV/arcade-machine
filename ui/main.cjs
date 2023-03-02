const { app, BrowserWindow, ipcMain } = require("electron");
const { globalShortcut } = require("electron");
const path = require("path");
const vars = require("./vars.json");
const { spawn } = require("child_process");

/** @type {BrowserWindow} */
let mainWindow;

if (!app.requestSingleInstanceLock()) {
    app.quit();
} else {
    app.on("second-instance", (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.focus();
        }
    });
}

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
        autoHideMenuBar: true,
    });

    if (process.env.NODE_ENV !== "development") {
        console.log("Production mode");
        mainWindow.loadFile(path.join(__dirname, "/renderer/dist/index.html"));
    } else {
        console.log("Development mode");
        mainWindow.loadURL("http://localhost:5173/");
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on("closed", () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
};

app.whenReady().then(() => {
    createWindow();
});

/** @type {null|{ id: number, process: ReturnType<spawn>, title: string }} */
let running = null;

const stop = () => {
    if (running == null) return;

    running.process.kill();

    setTimeout(() => {
        if (running) {
            running.process.kill("SIGKILL");
        }
    }, 1000);

    mainWindow.webContents.send("game-stoping", running.id, running.title);
};

let supporting = [];

ipcMain.on("start", (event, data) => {
    if (running) stop();
    const game = vars.games[data];
    if (!game) return event.reply("error", "Game not found");

    if (game.supporting) {
        for (const exe of game.supporting) {
            if (supporting.includes(exe)) continue;
            supporting.push(exe);
            spawn(exe.path, {
                windowsHide: true
            });
            if (exe["kill-browser"]) {
                setTimeout(() => {
                    spawn("taskkill", ["/im", vars.browser]);
                }, 1200);
            }
        }
    }

    running = {
        id: data,
        process: spawn(game.path, game.args, {
            windowsHide: true
        }),
        title: game.title,
    };

    event.reply("game-start", data, game.title);

    running.process.on("close", () => {
        running = null;

        event.reply("game-stop", data, game.title);
    });

    running.process.on("error", (err) => {
        console.error(err);
        event.reply("game-error", err, data, game.title);
    })
});
