# Welcome to symfony code snippets extention contributing guide

Thank you for investing your time in contributing to our project! :zap:

## Getting started

### Issues
#### Create a new issue

If you spot a problem, search if an issue already exists. If a related issue doesn't exist, you can open a new issue using [issue page](https://github.com/nalabdou/symf![Screenshot_20230906-030601](https://github.com/nalabdou/symfony-code-snippets/assets/144628967/08b6eeeb-7a0b-4c41-8041-be4a7709807a)
![Screenshot_20230920-001811](https://github.com/nalabdou/symfony-code-snippets/assets/144628967/f6682528-9d89-4ffa-83aa-79e7a5f91e03)
ony-code-snippets/issues).

### Add code snippets

1. Fork the repository.
2. Clone the forked repository

 `git clone https://github.com/YOUR-GH-USERNAME/symfony-code-snippets`

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
