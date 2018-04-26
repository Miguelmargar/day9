describe("fizzBuzz calculator", function() {
    it("if loop is wrong", function() {
        spyOn(console, "log");
        fizzBuzz();
        for (let i = 0; i < 100; i++) {
            expect(console.log).toHaveBeenCalledWith(i);
        }    
    });
    
    
    it("If not divisible by 3 or 5 should be i", function() {
      expect(fizzBuzz(4)).toBe(4);  
    });
    it("if divisible by 3 should log fizz", function() {
        expect(fizzBuzz(3)).toBe(3 + " fizz");
    });
    it("if divisible by 5 should log fizz", function() {
        expect(fizzBuzz(5)).toBe(5 + " buzz");
    });
    it("if divisible by both 3 and 5", function() {
        expect(fizzBuzz(15)).toBe(15 + " fizzBuzz");
    });
})

// console log spy does not work 
// other tests are not working as there is a loop built and these 
// are designed to work without the loop