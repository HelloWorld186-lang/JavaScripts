//exmaple of the previosue lecture 

const StringValue = 'Ayush      '
//now this string prototype can be use any other string
String.prototype.trueLenghtOfString  = function(){
    console.log(`The true length of the string is :- ${this.trim().length}`)
}
StringValue.trueLenghtOfString() //this is the methode 
'            Hello'.trueLenghtOfString() //this show that the protype of string is gone to use by all other string 