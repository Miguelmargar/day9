describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
             expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
                expect(areaOfCircle(5)).toBe(78.54);
         });
        it("should alert when given two or more arguments", function() {
            spyOn(window, "alert");
            areaOfCircle(2, 4);
            expect(window.alert).toHaveBeenCalledWith("Only one variable needed");
        });
        it("Should alert error when given a 0 as an argument",function() {
            spyOn(window, "alert");
            areaOfCircle(0);
            expect(window.alert).toHaveBeenCalledWith("0 value not valid")
        });
        it("should alert error when given a negative argument", function() {
            spyOn(window, "alert");
            areaOfCircle(-1);
            expect(window.alert).toHaveBeenCalledWith("Negative value not valid");
        })
        it("should alert for NaN", function() {
            spyOn(window, "alert");
            areaOfCircle("string");
            expect(window.alert).toHaveBeenCalledWith("Argument given in not a number");
        })
        
    });
    
    describe("Square Root function", function() {
         it("should return 3 for square root of 9", function() {
             expect(squareRoot(9)).toBe(3);
         });
    });
    
    describe("Square function", function() {
         it("should return 9 as the square of 3", function() {
             expect(squareMe(3)).toBe(9);
         });
    });

});