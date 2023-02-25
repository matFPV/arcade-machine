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
- Add new switch switch case in
```javascript   
switch (vers) {
        case 3:
            execFile(AsphyxiaPath);   
            execFile(SDVX3Path);
            //console.log(vers);
            break;
        case 4: 
            execFile(AsphyxiaPath);   
            execFile(SDVX4Path);
            break;
        case 5:
            execFile(AsphyxiaPath);   
            execFile(SDVX5Path);
            break;
        case 6:
            execFile(NewVar)
        default:
            break;
```
With execFile(your variable)
Like this: 
```javascript
        case 6:
            execFile(NewVar)
```

- Add ```<button class="move" type="button" id="sdvx3-button"  onclick="vers=3;sdvx()"> ```
 > set the id to whatever you want and vers to corresponding number in switch case
 

