import { app, BrowserWindow, dialog, ipcMain, SaveDialogOptions } from 'electron';
import { optimizer } from '@electron-toolkit/utils';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { VERSION } from './types/constants';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow: BrowserWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  mainWindow.removeMenu();
};

// TODO - currently unable to track if the file is saved
function setTitle(saved: boolean = true, filepath: string = null) {
  let title = "BoPOTTLo Save Editor V" + VERSION;
  if (filepath != null) {
    title += " - ";
    if (!saved) {
      title += "*";
    }
    title += filepath;
  }
  mainWindow.setTitle(title);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();

  // TODO - allow different file encodings?
  ipcMain.handle('showOpenFileDialog', async (event, params) => {
    const filePickerResult = await dialog.showOpenDialog(params);
    if (filePickerResult.filePaths[0] != undefined) {
      try {
        const data = fs.readFileSync(filePickerResult.filePaths[0], { encoding: 'utf-8', flag: 'r' });
        setTitle(true, filePickerResult.filePaths[0]);
        return { data: data, filepath: filePickerResult.filePaths[0] };
      } catch (err) {
        console.error(err);
        return null; // TODO - user-side error reporting
      }
    }
    return null;
  });
  
  ipcMain.handle('showSaveFileDialog', async (event, params: { data: string, options: SaveDialogOptions}) => {
    const filePickerResult = await dialog.showSaveDialog(params.options);
    if (filePickerResult.filePath != undefined) {
      try {
        fs.writeFileSync(filePickerResult.filePath, params.data, { encoding: 'utf-8' });
        setTitle(true, filePickerResult.filePath);
        return filePickerResult.filePath;
      } catch (err) {
        console.error(err); // TODO - user-side error reporting
      }
    }
    return null;
  });

  ipcMain.handle('getOS', () => {
    return os.platform();
  });
});

app.on('browser-window-created', (_, window) => {
  optimizer.watchWindowShortcuts(window);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
