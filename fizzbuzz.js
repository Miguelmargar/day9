
function fizzBuzz() {
    for (i = 0; i < 100; i++) {
        if (i%3 == 0 && i%5 == 0) {
             console.log(i + " fizzBuzz");
            } 
         if (i%3 == 0) {
             console.log(i + " fizz");
            }  
         if (i%5 == 0) {
             console.log(i + " buzz");
            }
         else { 
             console.log(i)
            }
    }
}
fizzBuzz();