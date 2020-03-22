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

### You Can Use It In The PHP Code

![Image-of-Snippets-php-code](https://rawcdn.githack.com/nalabdou/Symfony-code-snippets/master/images/Controller.gif)

### You Can Use It In Twig Files ♥

![Image-of-Snippets-twig](https://rawcdn.githack.com/nalabdou/Symfony-code-snippets/master/images/twig.gif)

## Snippets Symfony

Trigger | Description
--- | ---
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
syEmail | use this snippet to generate the assert Email in the symfony Annotations.
syUrl | use this snippet to generate the assert Url in the symfony Annotations.
syNotEqualTo | use this snippet to generate the assert notequalto in the symfony Annotations.
syGreaterThan | use this snippet to generate the assert GreaterThan in the symfony Annotations.
syUniqueEntity | use this snippent to generate uniqueEntity to make sure that the fields are uniques.
syhasLife | use this snippet to generate the Annotation @ORM\\HasLifecycleCallbacks() in symfony entity.
syPre | use this snippet to generate the * @ORM\\PrePersist * @ORM\\PreUpdate .

### Snippets Twig

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
encoreCss | `{{ encore_entry_link_tags('app') }}` | Function
encoreJs | `{{ encore_entry_scropt_tags('app') }}` | Function
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

## Source

[Github](https://github.com/nalabdou/Symfony-code-snippets)
