const BrowserWindow = require('electron').BrowserWindow;

exports.win

exports.createWindow = () => {
    this.win = new BrowserWindow({ width: 500, height: 800 })

    this.win.webContents.openDevTools();

    this.win.loadURL(`file://${__dirname}/renderer/main.html`);

    this.win.on('closed',()=>{
        this.win = null;
    })
}