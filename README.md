## UI for launching games with Custom built controllers
- UI made to be controlled with 4 keys
- Has 6 configurable premade slots for games
### How to Use with the 6 slots ?
- Set Keys in key section of Vars.js
- Set GamePath to whatever exe you want to run example: ``"C:\\Users\\kryvas\\Downloads\\asphyxia-core-win-x64\\asphyxia.exe"``
(Number behind GamePath corresponds to grid number so 1 will be for the first square, 6 for the last)
- Set game titles (var Title)
- set Game icons
- Now youre all set

 ## Closing the game with shortcut setup
 - Configure ExitKey1 and ExitKey2 in Vars.js
 - Set variable GameExe to whatever your game exe is (number after "GameExe" determines on which grid pos it will be)
 - if you added more game slots add case in switch statement and new GameExe variable in main.js

### How to Add More Games/Slots ?
- Add a new variale in **Vars.js** and set it to game exe path
- Add new switch switch case in last portion of index.html
```javascript   
witch (vers) {
                case 1:
                    execFile(AsphyxiaPath);
                    exec("start /b " + GamePath1); //executes cmd with start and path
                    setTimeout(function () {
                        exec("taskkill /im " + browser)//kills browser
                    }, 1200)
                    //console.log(vers);
                    ipcRenderer.send("number", vers); //sends number to main which tells main what to kill on shortcut
                    break;
                case 2:
                    execFile(AsphyxiaPath);
                    exec("start /b " + GamePath2);
                    setTimeout(function () {
                        exec("taskkill /im " + browser)
                    }, 1200)
                    ipcRenderer.send("number", vers);
                    break;
                case 3:
                    execFile(AsphyxiaPath);
                    exec("start /b " + GamePath3);
                    setTimeout(function () {
                        exec("taskkill /im " + browser)
                    }, 1200)
                    ipcRenderer.send("number", vers);
                    break;
                case 4:
                    execFile(AsphyxiaPath);
                    exec("start /b " + GamePath4);
                    setTimeout(function () {
                        exec("taskkill /im " + browser)
                    }, 1200)
                    ipcRenderer.send("number", vers);
                    break;
                case 5:
                    execFile(GamePath5);
                    ipcRenderer.send("number", vers);
                    break;
                case 6:
                    execFile(GamePath6);
                    ipcRenderer.send("number", vers);
                default:
                    break;
            }
```
With ``execFile(your variable)``
and ``ipc.Renderer.send("number", vers);``
Like this: 
```javascript
        case 7:
            execFile(your variable)
            ipc.Renderer.send("number", vers);
```

- Add ```<button class="move" type="button" id="sdvx3-button"  onclick="vers=3;sdvx()"> ```
To index.html
 > set the id to whatever you want and vers to corresponding number in switch case
 


