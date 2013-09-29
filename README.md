valisaur
========

jQuery Plugin: Form Validation and Extra stuff

**Note: This is work in progress. I haven't considered much about selection fields and junk like that. Just wanted to make a basic validation tool for fun.

Options {}

failMessage: 'is a required field' 
//Takes a string and handles the error message on fail. Currently only being used at console log, but I'll figure out how I wanna use it later.

phoneRegex: 
//Takes in a Regular Expressions. Default is set to US phone #s.

emailRegex: 
//Takes in a Regular Expressions. Default is standard email regex.

require: '*' //String used to distinguish required fields. Takes a special 'all' string to add a all fields required message.

requireAll: false //Boolean. Will set all fields as required.

requireAll: 
