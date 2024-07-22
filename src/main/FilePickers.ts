import { dialog, OpenDialogOptions } from 'electron';

type FILE_OPEN_CALLBACK = (params: OpenDialogOptions) => string;

var fileOpenCallback: FILE_OPEN_CALLBACK;
var fileSaveCallback;

export function setFileViewerCallback(callback: FILE_OPEN_CALLBACK) {
    fileOpenCallback = callback;
}

export function getFileViewerCallback() {
    return fileOpenCallback;
}
    