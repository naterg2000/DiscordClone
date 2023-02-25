const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      //webPreferences: {
        //preload: path.join('', 'preload.js')
      //}
    })
  
    win.loadFile('screens/landingPage/landingPage.html')
}