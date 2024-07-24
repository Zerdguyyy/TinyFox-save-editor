// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer, OpenDialogOptions, SaveDialogOptions } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    openFile: (params: OpenDialogOptions) => { 
        return ipcRenderer.invoke("showOpenFileDialog", params);
    },
    saveFile: (data: string, options: SaveDialogOptions) => { 
        return ipcRenderer.invoke("showSaveFileDialog", { data: data, options: options });
    },
    platform: ipcRenderer.invoke("getOS"),
})