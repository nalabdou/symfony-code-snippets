# Symfony Code Snippets And Twig Support

Over 50 Symfony Code Snippets for PhP code And Over 50 Twig Code Snippets.
Just type the letters 'sy' to get a list of all available Symfony Code Snippets.
For Twig Just Type the Tag name and you will get AutoCompletion.

## For using the snippets in the Annotations Comments you need to add this Code To Your Settings.json File

```json
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    }
```

### You Can Use It In The Annotations Comments

![Image-of-Snippets-comments](https://rawcdn.githack.com/nalabdou/Symfony-code-snippets/master/images/in-comments.gif)

### You Can Use It In The PHP Code :elephant:

![Image-of-Snippets-php-code](https://rawcdn.githack.com/nalabdou/Symfony-code-snippets/master/images/Controller.gif)

### You Can Use It In Twig Files :green_heart:

![Image-of-Snippets-twig](https://rawcdn.githack.com/nalabdou/Symfony-code-snippets/master/images/twig.gif)

### You Can Use It In Yaml Files :zap:

![Image-of-Snippets-yaml](https://rawcdn.githack.com/nalabdou/Symfony-code-snippets/master/images/yaml.png)

## Snippets Symfony

Trigger | Description
--- | ---
syFun | you can use this snippet to genarate public function statment just like that
syControllerFunction | use this snippets to generate function in the controller with Route,RouteName,FunctionName,Template for rendering in twig.
syFormGen | use this snippet to generate $form variable into the controller function change the formtype and the entity.
syHandleRequest | use this snippet to Generate handleRequest Function change the RequestVar with your requestvar name.
syRemove  | use this snippet to remove or delete data from the database do not forgot to inject the class entitymanagerenterface in the function parametters
syRedirectToRoute | use this snippet to generate return to redirecttoroute name change the routeName with  Your RouteName.
syRedirect | use this snippet to return the redirection to url
syUserHash | use this function to generate function for hashing the users password don not forgot to setup the file security.yaml.
syTwigForm | use this function to send the $form var to the frontend using twig.
syLogout | use this snippet to generate logout function withe symfony you just need to setup the file security.yaml.
syAddFlash | use this snippet to generate flash message you need to setup the display code in the file base.html.twig.
syTwigVar | use this snippet to send the vars to twig via the function render.
syRender | use this snippet to generate render function to send the view into twig.
syGetUser | use this snippet to get the current conected user.
syDump | use this snippet to generate the dump function in symfony.
syJson | use this snippet to generate return json in symfony controller.
syFindAll | use this snippet to generate the function findAll from one repository you need to inject the repo you want in the function parameters.
syFindOneBy | use this snippet to generate the function findOneBy to get one value from repo do not forgot to inject the repository in this function parameters.
syFindOne | use this snippet to generate the function findOne you need to inject the repo in this function parameters.
syFindBy | use this function to generate the function findBy from one repo do not forgot to incject the repo you want in this function parameters.
syManager | use this snippet to generate the var $manager to reacte with the database.
syRepo | use this snippet to generate the $repo var ex $repo = $this->getDoctrine()->getRepository(Product::class);.
syPersist | use this snippet to generate $manager persist.
syGetSalt | use this snippet to generate the function getSalt for the user entity when you implaments the UserInterFace.
syGetUsername | use this snippet to generate the function getUsername for the user entity when you implaments the UserInterFace.
syEraseCredentials | use this snippet to generate the function eraseCredentials for the user entity when you implaments the UserInterFace.
syQueryBuilder | use this snippt to create querybuilder in the repos to get data from the database.
syEqualTo | use this snippet to generate the assert equalto in the symfony Annotations.
syLength | use this snippet to generate the assert Length in the symfony Annotations.
syNotBlank | use this snippet to generate the assert NotBlank in the symfony Annotations.
syNotNull | use this snippet to generate the assert NotNull in the symfony Annotations.
syBlank | use this snippet to generate the assert Blank in the symfony Annotations.
syIsNull | use this snippet to generate the assert IsNull in the symfony Annotations.
syTrue | use this snippet to generate the assert IsTrue in the symfony Annotations.
syFalse | use this snippet to generate the assert IsFalse in the symfony Annotations.
syType | use this snippet to generate the assert Type in the symfony Annotations.
syRegex | use this snippet to generate the assert Regex in the symfony Annotations.
syIp | use this snippet to generate the assert Ip in the symfony Annotations.
syAJson | use this snippet to generate the assert Json in the symfony Annotations.
syUuid | use this snippet to generate the assert Uuid in the symfony Annotations.
syUserPassword | use this snippet to generate the SecurityAssert UserPassword in the symfony Annotations.
syEmail | use this snippet to generate the assert Email in the symfony Annotations.
syUrl | use this snippet to generate the assert Url in the symfony Annotations.
syNotEqualTo | use this snippet to generate the assert notEqualto in the symfony Annotations.
syIdenticalTo | use this snippet to generate the assert IdenticalTo in the symfony Annotations.
syNotIdenticalTo | use this snippet to generate the assert NotIdenticalTo in the symfony Annotations.
syGreaterThan | use this snippet to generate the assert GreaterThan in the symfony Annotations.
syGreaterThanOrEqual | use this snippet to generate the assert GreaterThanOrEqual in the symfony Annotations.
syLessThan | use this snippet to generate the assert LessThan in the symfony Annotations.
syLessThanOrEqual | use this snippet to generate the assert LessThanOrEqual in the symfony Annotations.
syRange | use this snippet to generate the assert Range in the symfony Annotations.
syDivisibleBy | use this snippet to generate the assert DivisibleBy in the symfony Annotations.
syUnique | use this snippet to generate the assert Unique in the symfony Annotations.
syPositive | use this snippet to generate the assert Positive in the symfony Annotations.
syPositiveOrZero | use this snippet to generate the assert PositiveOrZero in the symfony Annotations.
syNegative | use this snippet to generate the assert Negative in the symfony Annotations.
syNegativeOrZero | use this snippet to generate the assert NegativeOrZero in the symfony Annotations.
syDate | use this snippet to generate the assert Date in the symfony Annotations.
syDateTime | use this snippet to generate the assert DateTime in the symfony Annotations.
syTime | use this snippet to generate the assert Time in the symfony Annotations.
syTimezone | use this snippet to generate the assert Timezone in the symfony Annotations.
syLanguage | use this snippet to generate the assert Language in the symfony Annotations.
syLocale | use this snippet to generate the assert Locale in the symfony Annotations.
syCountry | use this snippet to generate the assert Country in the symfony Annotations.
syUniqueEntity | use this snippent to generate uniqueEntity to make sure that the fields are uniques.
syhasLife | use this snippet to generate the Annotation @ORM\\HasLifecycleCallbacks() in symfony entity.
syPre | use this snippet to generate the * @ORM\\PrePersist * @ORM\\PreUpdate .
syRoute | use this snippet to get the @Route of symfony

## Symfony Twig Snippets

Trigger | Twig Code | Type
---|---|---
asset | `{{ asset('') }}` | Symfony
formStart | `{{ form_start(form) }}` | Symfony
formWidget | `{{ form_widget(form) }}` | Symfony
formEnd | `{{ form_end(form) }}` | Symfony
path | `{{ path(route) }}` | Symfony
render | `{{ render(uri, {options}) }}` | Symfony
controller | `{{ controller(controller, {attributes}, {query}) }}` |Symfony
csrf | `{{ csrf_token(intention) }}` | Symfony
isGranted | `{% if is_granted('ROLE_NAME',object,field) %} {% endif %}` |Symfony
url | `{{ url(route_name,{options}) }}` | Symfony
formErrors | `{{ form_errors(form) }}` | Symfony
formRow | `{{ form_row(form.name) }}` | Symfony
formRest | `{{ form_rest(form) }}` | Symfony
formTheme | `{% form_theme form resourcesPath %}` | Symfony
absolute_url |`{{ absolute_url(${path}) }}` | Symfony
relative_path | `{{ relative_path(${path}) }}` | Symfony
humanize | `humanize` | Symfony
yaml_encode | `yaml_encode()` | Symfony
yaml_dump | `yaml_dump()` | Symfony
abbr_class | `abbr_class` | Symfony
abbr_method | `abbr_method` | Symfony
format_args | `format_args` | Symfony
format_args_as_text | `format_args_as_text` | Symfony
encoreJs | `{{ encore_entry_scropt_tags('app') }}` | Symfony
encoreCss | `{{ encore_entry_link_tags('app') }}` | Symfony

### Syntaxes Twig

Trigger | Twig Code | Type
---|---|---
attribute | `{{ attribute() }}` | Function
autoescape | `{% autoescape %}{% endautoescape %}` | Tag
block | `{% block name %}{% endblock %}` | Tag
batch | `batch(size, fill)` | Filter
constant | `{{ constant('constName') }}` | Test
convert_encoding | `convert_encoding('to', 'from')` | Filter
cycle | `{{ cycle(array, position) }}` | Filter
date | `date("m/d/Y")` | Filter
datef | `{% set currentDate = date() %}` | Function
date_modify | `date_modify("+1 day")` | Function
default | `default('defaultValue')` | Function
dump | `<pre>{{ dump(array) }}</pre>` | Function
do | `{% do someOp %}` | Tag
else | `{% else %}` | Tag
else if | `{% elseif condition %}` | Tag
embed | `{% embed "fileName.html.twig" %}{% endembed  %}` | Tag
execute | `{%  %}` | NULL
extends |`{% extends "fileName.html.twig" %}`| Tag
filter |`{% filter filterName %}{% endfilter  %}` | Tag
flush | `{% flush %}` | Tag
for | `{% for row in array %}{% endfor %}` | Tag
for else | `{% for row in array %}{% else %}{% endfor %}` | Tag
for if else | `{% for row in array if condition %}{% else %}{% endfor %}` | Tag
format | `format()` | Filter
formTwig | `{{form_start(form)}}{{form_widget(form)}}{{form_end(form)}}` | Function
if | `{% if condition %}{% endif %}` | Tag
if else | `{% if condition %}{% else %}{% endif %}` | Tag
import | `{% import "fileName.html.twig" as alias %}` | Tag
include | `{% include "fileName.html.twig" %}` | Tag
join | `join('separator')` | Filter
json_encode | `json_encode()` | Filter
loop | `loop.` | Filter With AutoComplation
macro | `{% macro name() %}{% endmacro %}` | Tag
max | `{% set result = max(array) %}` | Filter
merge | `merge(array)` | Filter
min | `{% set result = min(array) %}` | Filter
number_format | `number_format(1, '${.}', '${,}')` | Filter
parent | `{{ parent() }}` | Function
random | `{% set result = random() %}` | Function
range | `range(low, high, step)` | Function
range set | `{% set result = range(low, high, step) %}` | Function
replace | `replace('search' : 'replace')` | Filter
round | `round(, 'floor')` | Filter
sandbox | `{% sandbox %}{% endsandbox %}` | Tag
set | `{% set varName = value %}` | Tag
show | `{{  }}` | Null
slice | `slice(start, length)` | Filter
source | `{{ source('fileName.html.twig') }}` | Tag
spaceless | `{% spaceless %}{% endspaceless %}` | Tag
split | `split('')` | Filter
self | `_self` | Null
template | `{{ include(template_from_string("strings")) }}` | Function
trim | `trim('')` | Filter
use | `{% use "fileName.html.twig" %}` | Tag
verbatim | `{% verbatim %}{% endverbatim %}` | Tag

### Yaml Snippets

Trigger | Description
--- | ---
syBootstrap | yaml snippet to add the bootstrap theme to our form display form_themes
syEncoder | snippet to generate encoder password in yaml file
syNewProvider | new provider for your user
syProvider | symfony main fierwall for add the provider and login logout path

## Changelog

## [0.0.1] - 2020-03-22

### Symfony Support added

- Add Main Symfony Function By [@nalabdou](https://github.com/nalabdou).
- Add The Support For The Symfony Annotations By [@nalabdou](https://github.com/nalabdou).

## [0.1.1] - 2020-03-23

### Twig Support added

- Add Full Support For Twig Syntaxes Highlighting By [@nalabdou](https://github.com/nalabdou).
- Add All Twig Snippets(Tags,Filters,Functions,Tests) By [@nalabdou](https://github.com/nalabdou).
- Add Configration Rules By [@nalabdou](https://github.com/nalabdou).

## [0.1.2] - 2020-03-28

### Yaml Support added

- Add mini yaml support by [@nalabdou](https://github.com/nalabdou).
- fix bug  #1 by [@nalabdou](https://github.com/nalabdou).

## [0.1.3] - 2020-03-29

### Twig Reference from Symfony added

- Add twig reference from symfony by  [@nalabdou](https://github.com/nalabdou).

#### Future Goals

- Add Twig Reference from Symfony (Done 80%)
- Add Support For Symfony Yaml file Syntaxes And Snippets (working 10%)
- Add More Symfony Php Code Snippets
- Add Custom Snippets
