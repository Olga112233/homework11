function createCalculator() {
    const result = {
        x: 10,
    }
   

return {
    
    sum: function () {
        result.x = result.x + 5;
    },
    
    mult: function () {
        result.x = result.x * 10;
    },

    sub: function () {
        result.x = result.x - 40;
    },

    div: function () {
        result.x = result.x / 10;
    },

    set: function () {
        result.x = 100;
    },

    showcreateCalculator() {
        console.log(result);
    }
}
};

const calc = createCalculator(10);
calc.sum();
calc.showcreateCalculator();
calc.mult();
calc.showcreateCalculator();
calc.sub();
calc.showcreateCalculator();
calc.div();
calc.showcreateCalculator();
calc.set();
calc.showcreateCalculator();