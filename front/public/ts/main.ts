const {app, BrowserWindow, ipcMain, nativeTheme } = require('electron');
const path = require('path');
declare let mainWindow: any
declare let isMaximize: boolean;

ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'dark'
})

ipcMain.on('minimizeApp', () => {
	mainWindow.minimize();
});

ipcMain.on('maxMinApp', () => {
	if (!isMaximize)
		mainWindow.maximize()
	else
		mainWindow.unmaximize()
	isMaximize = !isMaximize
});

ipcMain.on('closeApp', () => {
	mainWindow.close();
});

function createWindow () {
	mainWindow = new BrowserWindow({
		width: 754,
		height: 560,
		/*minWidth: 754,
		minHeight: 560,
		maxWidth: 754,
		maxHeight: 560,*/
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			devTools: true,
			preload: path.join(__dirname, 'preload.js')
		}
	});

	isMaximize = false

	mainWindow.loadFile('../index.html');
}

app.whenReady().then(() => {
	createWindow();
  
	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});


