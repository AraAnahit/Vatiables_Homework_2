let i = 10
let n= i++ %5
//answer i=11 , n =0
//We got such values, because ++ or -- has prefix form or postfix form
//In the prefix form ++counter increments counter and returns the new value. 
//In the postfix form counter++ also increments counter but returns the old value (prior to increment). 
// Here we have i++, so it returns old value 10, and remainder of the "10/5" = 0, so n = 0.
// But also i changed by and now i=11