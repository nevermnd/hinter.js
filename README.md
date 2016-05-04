# hinter.js

[![Build Status](https://travis-ci.org/nevermnd/hinter.js.svg?branch=master)](https://travis-ci.org/nevermnd/hinter.js)

*hinter.js* is a Lightweight jQuery plugin to display nice bootstrap hints.

## Installation

Install with [Bower](http://bower.io):

``` bower install hinter ```

or [npm](https://www.npmjs.com):

``` npm install hinter ```

then include the javascript file on your HTML page after `jquery` and `bootstrap`.

```html
  <!-- ... -->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
  
  <!-- ... -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="path/to/hinter.min.js"></script>
```

## Plugin options

The plugin configuration options are the following:

+ message 
  + the hint message
+ isSuccess
  + whether to display a success message or a error message
+ slideUp
  + the slideUp animation delay (ms)
+ delay
  + time (ms) the hint is meant to be shown. Set this to 0 if you don't want the hint to be disposed
+ id
  + the hint `id` html attribute
+ class
  + one or more classes to add to the hint
  
## Usage

There are two ways of using *hinter*. The first one is configuring and displaying the hint at once. Ex:

```js
$('body').hinter({ message: "Scary spooky error message", isSuccess: false, id: "hinter-2-spooky" });
```

The second one is configuring the hint options through the nice chainable methods. Ex:

```js
$('body').hinter().success().message("Nice friendly message!").delay(6000).show();
```

Or you can mix both. Ex:

```js
$('body').hinter().config({isSuccess: false, delay: 3000}).message("An error has ocurred =[").show();
```

## TODO

Add more configuration options to the plugin.

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)
