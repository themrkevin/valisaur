Valisaur
========

## jQuery Plugin: Form Validation and Extra stuff

> Note: This is work in progress. I haven't considered much about selection fields and junk like that. Just wanted to make a basic validation tool for fun.

## Using the plugin

Include the stylesheet in the header:
```html
<link rel="stylesheet" href="valisaur.css">
```
Include the javascript files before any custom JS:
```html
<script src="jquery.js"></script>
<script src="jquery.valisaur.js"></script>
<script>
$('form').valisaur();
</script>
```

## Options {}

Using options to customize some of the fancy stuff.
```javascript
$('form').valisaur({
	option1: value1,
	option2: value2
});
```

```javascript
failMessage: 'is a required field',
//String. Handles the error message on fail. Currently only being used at console log, but I'll figure out how I wanna use it later.

phoneRegex: ,
//Regular Expressions. Default is set to US phone #s.

emailRegex: ,
//Regular Expressions. Default is standard email regex.

require: '*',
//String. Used to distinguish required fields.
//Takes a special 'all' string to add a all fields required message.

requireAll: false 
//Boolean. Will set all fields as required.
```
