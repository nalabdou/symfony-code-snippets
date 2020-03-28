var vscode = require('vscode');
var fs = require('fs');

var filtersArr = getJson('/snippets/filters.json');
var functionsArr = getJson('/snippets/functions.json');
var twigArr = getJson('/snippets/twig.json');
var loopArr = getJson('/tests/loop.json');
var testsArr = getJson('/tests/tests.json');

function getJson(relativePath) {
    var file = fs.readFileSync(__dirname + relativePath, 'utf8');
    return JSON.parse(file);
}

function createHover(snippet) {
    var example = (typeof snippet.example === 'undefined') ? '' : snippet.example;
    var description = (typeof snippet.description === 'undefined') ? '' : snippet.description;
    return new vscode.Hover({
        language: 'html',
        value: description + '\n\n' + example
    });
}

function activate(context) {

    var hovers = vscode.languages.registerHoverProvider('html', {
        provideHover(document, position, token) {
            var range = document.getWordRangeAtPosition(position);
            var word = document.getText(range);

            for (var snippet in filtersArr) {
                if (filtersArr[snippet].prefix === word || filtersArr[snippet].hover === word) {
                    return createHover(filtersArr[snippet]);
                }
            }

            for (var snippet in functionsArr) {
                if (functionsArr[snippet].prefix === word || functionsArr[snippet].hover === word) {
                    return createHover(functionsArr[snippet]);
                }
            }

            for (var snippet in twigArr) {
                if (twigArr[snippet].prefix === word || twigArr[snippet].hover === word) {
                    return createHover(twigArr[snippet]);
                }
            }

        }
    });

    context.subscriptions.push(hovers);

    var filters = vscode.languages.registerCompletionItemProvider('html', {

        provideCompletionItems(document, position, token) {
            var start = new vscode.Position(position.line, 0);
            var range = new vscode.Range(start, position);
            var text = document.getText(range);
            var completionItems = [];

            if (text[text.length - 1] !== '|') {
                return completionItems;
            }
            for (var snippet in filtersArr) {

                if (typeof filtersArr[snippet].text !== 'undefined') {

                    var description = (typeof filtersArr[snippet].description === 'undefined') ? '' : filtersArr[snippet].description;
                    var example = (typeof filtersArr[snippet].example === 'undefined') ? '' : '\n\n' + filtersArr[snippet].example;

                    var item = new vscode.CompletionItem(snippet);
                    item.kind = vscode.CompletionItemKind.Function;
                    item.detail = filtersArr[snippet].description;
                    item.documentation = description + example;
                    item.insertText = filtersArr[snippet].text;

                    completionItems.push(item);
                }
            }

            return completionItems;
        },
        resolveCompletionItem(item, token) {

            return item;
        }


    }, '|');


    context.subscriptions.push(filters);


    var loopField = vscode.languages.registerCompletionItemProvider('html', {

        provideCompletionItems(document, position, token) {
            var start = new vscode.Position(position.line, 0);
            var range = new vscode.Range(start, position);
            var text = document.getText(range);
            var completionItems = [];

            if (text.substring(text.length - 5) !== 'loop.') {
                return completionItems;
            }

            for (var snippet in loopArr) {

                var description = (typeof loopArr[snippet].description === 'undefined') ? '' : loopArr[snippet].description;
                var item = new vscode.CompletionItem(snippet);

                item.kind = vscode.CompletionItemKind.Property;
                item.detail = description;

                completionItems.push(item);

            }

            return completionItems;
        },
        resolveCompletionItem(item, token) {

            return item;
        }


    }, '.');


    context.subscriptions.push(loopField);


    var tests = vscode.languages.registerCompletionItemProvider('html', {

        provideCompletionItems(document, position, token) {
            var start = new vscode.Position(position.line, 0);
            var range = new vscode.Range(start, position);
            var text = document.getText(range);
            var completionItems = [];

            if (!(text.substring(text.length - 3) === 'is ') || (text.substring(text.length - 3) === 'not ')) {
                return completionItems;
            }

            for (var snippet in testsArr) {

                var description = (typeof testsArr[snippet].description === 'undefined') ? '' : testsArr[snippet].description;
                var item = new vscode.CompletionItem(snippet);

                item.kind = vscode.CompletionItemKind.Keyword;
                item.detail = description;

                completionItems.push(item);

            }

            return completionItems;
        },
        resolveCompletionItem(item, token) {
            return item;
        }


    }, ' ');


    context.subscriptions.push(tests);

}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;
