# Welcome to symfony code snippets extention contributing guide

Thank you for investing your time in contributing to our project! :zap:

## Getting started

### Issues
#### Create a new issue

If you spot a problem, search if an issue already exists. If a related issue doesn't exist, you can open a new issue using [issue page](https://github.com/nalabdou/symfony-code-snippets/issues).

### Add code snippets

1. Fork the repository.
2. Clone the forked repository

 `git clone https://github.com/YOUR-GH-USERNAME/symfony-code-snippets.git`

3. Create `YOUR-GH-USERNAME.code-snippets` file inside `symfony-code-snippets/symfony/6.x/contributes`
4. Add your snippets using vscode snippets format
5. Add your file path to `package.json`
```json
{
    "language": "php",
    "path": "./symfony/6.x/contributes/YOUR-GH-USERNAME.code-snippets"
}
```
6. Commit your changes to your forked repository 
7. Create new [pull request](https://github.com/nalabdou/symfony-code-snippets/pulls) 
