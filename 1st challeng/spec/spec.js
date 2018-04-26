describe("calculator tests", function() {
    describe("addition tests", function() {
        
        it ("should return 4", function () {
            expect(addition(2, 2)).toBe(4);
        });
        
        it ("should not return 4 for different numbers", function() {
            expect(addition(20, 22)).toBe(42);
        })
        
        it ("should show an alert for NaN", function() {
            spyOn(window, "alert");
            addition("fish", 22);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        })
        
        it("should show an alert if we only supply one number", function() {
            spyOn(window, "alert");
            addition(42);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        })
    })
    
    describe("subtraction tests", function() {
        
        it ("should return 4", function() {
            expect(subtract(6, 2)).toBe(4);
        });
        
        it ("should not return 4 for different numbers", function() {
            expect(subtract(42, 40)).toBe(2);
        })
        
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            subtract("cat", 12);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        })
        
        it("should show an alert if we only supply one number", function() {
            spyOn(window, "alert");
            subtract(42);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        })
        
        it("should return negative numbers if num1 is smaller than num2", function() {
            expect(subtract(2, 6)).toBe(-4);
        });
    })
    
    describe("multiplication tests", function() {
        
        it("should return 6", function() {
            expect(multi(2, 3)).toBe(6);
        })
        
        it("should not return 6 for any other number", function() {
            expect(multi(3, 4)).toBe(12);
        })
        
        it("should show an alert if NaN", function() {
            spyOn(window, "alert");
            multi("dog", 3);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        });
        
        it("should show an alert if we only supply one number", function() {
            spyOn(window, "alert");
            multi(4);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        })
    })
    
})