import { window } from "vscode"

export const info = (message: string, ...items: string[]) => {
    return window.showInformationMessage(message, ...items);
}

export const warning = (message: string, ...items: string[]) => {
    return window.showWarningMessage(message, ...items);
}

export const error = (message: string, ...items: string[]) => {
    return window.showErrorMessage(message, ...items);
}