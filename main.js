const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
var ipcMain = require('electron').ipcMain;
global.sharedObj = {prop1:null};
ipcMain.on('show-prop1', function(event){
   console.log(global.sharedObj.prop1);
});
let win
function createWindow() {
   win = new BrowserWindow({width: 800, height: 500, frame: true, fullscreen: false})
   win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html') ,
      protocol: 'file:',
      slashes: true
   }))
   win.webContents.openDevTools()
   win.on('closed',() => {
    win=null
   })
}
app.on('ready', createWindow)