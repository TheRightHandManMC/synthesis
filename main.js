const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile('ui/login.html');
};

app.whenReady().then(() => {
  createWindow();

  ipcMain.on('login-success', () => {
    if (mainWindow) {
      mainWindow.loadFile('ui/home.html');
    }
  });

  ipcMain.on('open-register', () => {
    if (mainWindow) {
      mainWindow.loadFile('ui/register.html');
    }
  });

  ipcMain.on('open-login', () => {
    if (mainWindow) {
      mainWindow.loadFile('ui/login.html');
    }
  });
});
