import { commands, Uri } from "vscode";

export const open = (url: string) => {
    commands.executeCommand('vscode.open', Uri.parse(url));
}