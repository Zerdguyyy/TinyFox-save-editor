// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer, OpenDialogOptions } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    openFile: (params: OpenDialogOptions) => { 
        return ipcRenderer.invoke("showOpenFileDialog", params);
    },
    ipc: ipcRenderer
})