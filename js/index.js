var validator = require("email-validator");
 
validator.validate("test@email.com");

var passwordValidator = require('password-validator');
 
var format = new passwordValidator();
 
format
.is().min(10)                                    
.is().max(100)                                  
.has().uppercase()                              
.has().lowercase()                              
.has().digits(1)  
.has().symbols(1)                              
.has().not().spaces()                          
.is().not().oneOf(['Passw0rd', 'Password123']); 
 
console.log(format.validate('validPASS123'));

console.log(format.validate('invalidPASS'));
 
console.log(format.validate('joke', { list: true }));
