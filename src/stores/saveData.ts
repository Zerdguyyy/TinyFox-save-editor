import { defineStore } from "pinia";
import { isSaveFile, SAVE_FILE } from '../types/types';
import { fileOpenCallback, fileSaveCallback, PLATFORM } from "../main/PlatformContext";
import { Buffer } from 'buffer';
import { SHRINE_PRESETS } from "../types/constants";

export const useSaveDataStore = defineStore('saveDataStore', {
    state: () => {
        return {
            data: null as SAVE_FILE | null,
            filepath: null as string | null,

            shrinePresetName: "Unknown",
        }
    },
    actions: {
        setData(data: SAVE_FILE) {
            this.data = data;
            this.shrinePresetName = "Unknown"
            for (let shrinePreset of SHRINE_PRESETS) {
                if (
                    shrinePreset.camera == this.data.cameraName &&
                    shrinePreset.scene == this.data.sceneName
                ) {
                    this.shrinePresetName = shrinePreset.name;
                    break;
                }
            }
        },
        async saveFileAs() {
            if (this.data == null) {
                console.error("Cannot save, no data is loaded");
                return;
            }
            
            let raw = this.data;
            let str = JSON.stringify(raw);
            let encode = Buffer.from(str).toString("base64");
            let savedFilepath = await fileSaveCallback(encode, { 
                filters: [
                    { name: "Bo Save File", extensions: ["json"] }
                ]
            });
            if (this.savedFilepath != null) {
                this.filepath = savedFilepath;
            }
        },
        async openSaveFile() {
            let raw = await fileOpenCallback({ 
                defaultPath: this.getDefaultPath(), 
                filters: [
                    { name: 'Bo Save Files', extensions: ["json"] }
                ]
            });
            let decode = Buffer.from(raw.data, "base64").toString('utf-8');
            let ret = undefined;
            try {
                ret = JSON.parse(decode);
            } catch (err) {
                console.error(err);
            }
        
            if (ret != undefined) {
                if (isSaveFile(ret)) {
                    this.filepath = raw.filepath;
                    this.setData(ret);
                }
            }
        },
        getDefaultPath() {
            if (PLATFORM == 'win32') {
                return "~\\AppData\\LocalLow\\Squid Shock Studios\\Bo";
            }
            return "";
        }
    }
});