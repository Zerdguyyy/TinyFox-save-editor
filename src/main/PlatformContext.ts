import { dialog, OpenDialogOptions, SaveDialogOptions } from 'electron';

type FILE_OPEN_CALLBACK = (params: OpenDialogOptions) => Promise<{ data: string, filepath: string }>;
type FILE_SAVE_CALLBACK = (data: string, params: SaveDialogOptions) => Promise<string>;

export var fileOpenCallback: FILE_OPEN_CALLBACK;
export var fileSaveCallback: FILE_SAVE_CALLBACK;
export var PLATFORM: string;

export function setOpenFileCallback(callback: FILE_OPEN_CALLBACK) {
    fileOpenCallback = callback;
}

export function setSaveFileCallback(callback: FILE_SAVE_CALLBACK) {
    fileSaveCallback = callback;
}

export function setPlatform(_platform: string) {
    PLATFORM = _platform;
}
    