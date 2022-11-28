import * as vscode from 'vscode';
import Meta from './constant/Meta';
import { open } from './helper/http';
import { info } from './Notifcation/Notification';

export function activate(context: vscode.ExtensionContext) {
    const notifcation = info(Meta.welcome, Meta.followMe, Meta.dissmiss);
    notifcation.then((value) => value === Meta.followMe && open(Meta.github));
}

