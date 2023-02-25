## UI for launching games with Custom built controllers
### How to use ?
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
 
 ##Closing the game with shortcut setup
 - Configure ExitKey1 and ExitKey2 in Vars.js
 - Set variable GameExe to whatever your game exe is (number after "GameExe" determines on which grid pos it will be)
