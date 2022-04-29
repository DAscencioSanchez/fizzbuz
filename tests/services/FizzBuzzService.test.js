const FizzBuzzService = require("./../../lib/services/FizzBuzzService");

describe("Tests for FizzBuzzService.js", () => {

    test("1. A test for explorer1", () => {
        const explorer1 = {name: "Explorer1", score:1};
        const validationExplorer1 = FizzBuzzService.applyValidationInExplorer(explorer1);
        expect(validationExplorer1).toStrictEqual({ name: "Explorer1", score: 1, trick: 1 });
    });

    test("2. A test for explorer3", () => {
        const explorer3 = {name: "Explorer3", score:3};
        const validationExplorer3 = FizzBuzzService.applyValidationInExplorer(explorer3);
        expect(validationExplorer3).toStrictEqual( { name: "Explorer3", score: 3, trick: "FIZZ" });
    });

    test("3. A test for explorer5", () => {
        const explorer5 = {name: "Explorer5", score:5};
        const validationExplorer5 = FizzBuzzService.applyValidationInExplorer(explorer5);
        expect(validationExplorer5).toStrictEqual( { name: "Explorer5", score: 5, trick: "BUZZ" });
    });

    test("4. A test for explorer15", () => {
        const explorer15 = {name: "Explorer15", score:15};
        const validationExplorer15 = FizzBuzzService.applyValidationInExplorer(explorer15);
        expect(validationExplorer15).toStrictEqual( { name: "Explorer15", score: 15, trick: "FIZZBUZZ" });
    });
});