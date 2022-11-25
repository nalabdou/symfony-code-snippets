# Symfony code snippets

Over 100 <strong>symfony snippets</strong> for php code in Visual Studio Code.

Just type the letters 'sf' to get a list of all available symfony snippets.

### You can use it in the annotations comments

![Image-of-Snippets-comments](https://cdn.statically.io/gh/nalabdou/Symfony-code-snippets/e8ea6e26/images/in-comments.gif)

### For annotations you need to add this code to your settings.json file

```json
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    }
```

### You can use it in the .php files

![Image-of-Snippets-php-code](https://cdn.statically.io/gh/nalabdou/Symfony-code-snippets/e8ea6e26/images/Controller.gif)

## Snippets Symfony

Trigger | Description
--- | ---
sfFun | you can use this snippet to genarate public function statment just like that
sfControllerFunction | use this snippets to generate function in the controller with Route,RouteName,FunctionName,Template for rendering in twig.
sfFormGen | use this snippet to generate $form variable into the controller function change the formtype and the entity.
sfHandleRequest | use this snippet to Generate handleRequest Function change the RequestVar with your requestvar name.
sfRemove  | use this snippet to remove or delete data from the database do not forgot to inject the class entitymanagerenterface in the function parametters
sfRedirectToRoute | use this snippet to generate return to redirecttoroute name change the routeName with  Your RouteName.
sfRedirect | use this snippet to return the redirection to url
sfUserHash | use this function to generate function for hashing the users password don not forgot to setup the file security.yaml.
sfTwigForm | use this function to send the $form var to the frontend using twig.
sfLogout | use this snippet to generate logout function withe symfony you just need to setup the file security.yaml.
sfAddFlash | use this snippet to generate flash message you need to setup the display code in the file base.html.twig.
sfTwigVar | use this snippet to send the vars to twig via the function render.
sfRender | use this snippet to generate render function to send the view into twig.
sfGetUser | use this snippet to get the current conected user.
sfDump | use this snippet to generate the dump function in symfony.
sfJson | use this snippet to generate return json in symfony controller.
sfFindAll | use this snippet to generate the function findAll from one repository you need to inject the repo you want in the function parameters.
sfFindOneBy | use this snippet to generate the function findOneBy to get one value from repo do not forgot to inject the repository in this function parameters.
sfFindOne | use this snippet to generate the function findOne you need to inject the repo in this function parameters.
sfFindBy | use this function to generate the function findBy from one repo do not forgot to incject the repo you want in this function parameters.
sfManager | use this snippet to generate the var $manager to reacte with the database.
sfRepo | use this snippet to generate the $repo var ex $repo = $this->getDoctrine()->getRepository(Product::class);.
sfPersist | use this snippet to generate $manager persist.
sfGetSalt | use this snippet to generate the function getSalt for the user entity when you implaments the UserInterFace.
sfGetUsername | use this snippet to generate the function getUsername for the user entity when you implaments the UserInterFace.
sfEraseCredentials | use this snippet to generate the function eraseCredentials for the user entity when you implaments the UserInterFace.
sfQueryBuilder | use this snippt to create querybuilder in the repos to get data from the database.
sfEqualTo | use this snippet to generate the assert equalto in the symfony Annotations.
sfLength | use this snippet to generate the assert Length in the symfony Annotations.
sfNotBlank | use this snippet to generate the assert NotBlank in the symfony Annotations.
sfNotNull | use this snippet to generate the assert NotNull in the symfony Annotations.
sfBlank | use this snippet to generate the assert Blank in the symfony Annotations.
sfIsNull | use this snippet to generate the assert IsNull in the symfony Annotations.
sfTrue | use this snippet to generate the assert IsTrue in the symfony Annotations.
sfFalse | use this snippet to generate the assert IsFalse in the symfony Annotations.
sfType | use this snippet to generate the assert Type in the symfony Annotations.
sfRegex | use this snippet to generate the assert Regex in the symfony Annotations.
sfIp | use this snippet to generate the assert Ip in the symfony Annotations.
sfAJson | use this snippet to generate the assert Json in the symfony Annotations.
sfUuid | use this snippet to generate the assert Uuid in the symfony Annotations.
sfUserPassword | use this snippet to generate the SecurityAssert UserPassword in the symfony Annotations.
sfEmail | use this snippet to generate the assert Email in the symfony Annotations.
sfUrl | use this snippet to generate the assert Url in the symfony Annotations.
sfNotEqualTo | use this snippet to generate the assert notEqualto in the symfony Annotations.
sfIdenticalTo | use this snippet to generate the assert IdenticalTo in the symfony Annotations.
sfNotIdenticalTo | use this snippet to generate the assert NotIdenticalTo in the symfony Annotations.
sfGreaterThan | use this snippet to generate the assert GreaterThan in the symfony Annotations.
sfGreaterThanOrEqual | use this snippet to generate the assert GreaterThanOrEqual in the symfony Annotations.
sfLessThan | use this snippet to generate the assert LessThan in the symfony Annotations.
sfLessThanOrEqual | use this snippet to generate the assert LessThanOrEqual in the symfony Annotations.
sfRange | use this snippet to generate the assert Range in the symfony Annotations.
sfDivisibleBy | use this snippet to generate the assert DivisibleBy in the symfony Annotations.
sfUnique | use this snippet to generate the assert Unique in the symfony Annotations.
sfPositive | use this snippet to generate the assert Positive in the symfony Annotations.
sfPositiveOrZero | use this snippet to generate the assert PositiveOrZero in the symfony Annotations.
sfNegative | use this snippet to generate the assert Negative in the symfony Annotations.
sfNegativeOrZero | use this snippet to generate the assert NegativeOrZero in the symfony Annotations.
sfDate | use this snippet to generate the assert Date in the symfony Annotations.
sfDateTime | use this snippet to generate the assert DateTime in the symfony Annotations.
sfTime | use this snippet to generate the assert Time in the symfony Annotations.
sfTimezone | use this snippet to generate the assert Timezone in the symfony Annotations.
sfLanguage | use this snippet to generate the assert Language in the symfony Annotations.
sfLocale | use this snippet to generate the assert Locale in the symfony Annotations.
sfCountry | use this snippet to generate the assert Country in the symfony Annotations.
sfUniqueEntity | use this snippent to generate uniqueEntity to make sure that the fields are uniques.
sfhasLife | use this snippet to generate the Annotation @ORM\\HasLifecycleCallbacks() in symfony entity.
sfPre | use this snippet to generate the * @ORM\\PrePersist * @ORM\\PreUpdate .
sfRoute | use this snippet to get the @Route of symfony
sfVichUploadable | use this snippets to gereate the Annotation for Vich Uploader Bundle @Vich\Uploadable
sfVichField | use this snippets to gereate the Annotation for Vich Uploader Bundle @Vich\UploadableField(...)

## 🤝 Contributing

see [contributors](https://github.com/nalabdou/Symfony-code-snippets/graphs/contributors)

Contributions, issues and feature requests are welcome !<br />Feel free to check [issues page](https://github.com/nalabdou/Symfony-code-snippets/issues).

## Show your support

Give a ⭐️ if this project helped you !

<a href="https://www.buymeacoffee.com/nadim" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## 📝 License

Copyright © 2020 [Nadim Al Abdou](https://linkedin.com/in/nalabdou).<br />
This project is [GPL3](https://github.com/nalabdou/Symfony-code-snippets/blob/master/LICENSE) licensed.
