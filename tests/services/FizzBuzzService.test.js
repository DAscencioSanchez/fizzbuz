const FizzBuzzService = require("./../../lib/services/FizzBuzzService");

describe("Tests for FizzBuzzService.js", () => {

    test("1. A test of applyValidationInExplorer() for explorer1", () => {
        const explorer1 = {name: "Explorer1", score:1};
        const validationExplorer1 = FizzBuzzService.applyValidationInExplorer(explorer1);
        expect(validationExplorer1).toStrictEqual({ name: "Explorer1", score: 1, trick: 1 });
    });

    test("2. A test of applyValidationInExplorer() for explorer3", () => {
        const explorer3 = {name: "Explorer3", score:3};
        const validationExplorer3 = FizzBuzzService.applyValidationInExplorer(explorer3);
        expect(validationExplorer3).toStrictEqual( { name: "Explorer3", score: 3, trick: "FIZZ" });
    });

    test("3.  A test of applyValidationInExplorer() for explorer5", () => {
        const explorer5 = {name: "Explorer5", score:5};
        const validationExplorer5 = FizzBuzzService.applyValidationInExplorer(explorer5);
        expect(validationExplorer5).toStrictEqual( { name: "Explorer5", score: 5, trick: "BUZZ" });
    });

    test("4.  A test of applyValidationInExplorer() for 15", () => {
        const explorer15 = {name: "Explorer15", score:15};
        const validationExplorer15 = FizzBuzzService.applyValidationInExplorer(explorer15);
        expect(validationExplorer15).toStrictEqual( { name: "Explorer15", score: 15, trick: "FIZZBUZZ" });
    });

    test("5.  A test of applyValidationInNumber() for 1", () => {
        const score = 1;
        const validationInNumber1 = FizzBuzzService.applyValidationInNumber(score);
        expect(validationInNumber1).toBe(1);
    });

    test("6.  A test of applyValidationInNumber() for 3", () => {
        const score = 3;
        const validationInNumber3 = FizzBuzzService.applyValidationInNumber(score);
        expect(validationInNumber3).toBe("FIZZ");
    });

    test("7.  A test of applyValidationInNumber() for 5", () => {
        const score = 5;
        const validationInNumber5 = FizzBuzzService.applyValidationInNumber(score);
        expect(validationInNumber5).toBe("BUZZ");
    });

    test("8.  A test of applyValidationInNumber() for 15", () => {
        const score = 15;
        const validationInNumber15 = FizzBuzzService.applyValidationInNumber(score);
        expect(validationInNumber15).toBe("FIZZBUZZ");
    });
});