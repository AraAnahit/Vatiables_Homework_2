let name = "Ara";

alert( `hello ${1+5}` ); // output is hello 6
alert( `hello ${"name"}` ); //output is  hello name, because name is a String , not a variable due to quotes "" around word name
alert( `hello ${name}` ); // output hello Ara, because now name is a variable in this case.