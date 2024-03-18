import { classifyLetterGrade, getDayOfTheWeek, isEven } from "./conditionals-practice"

describe("isEven tests", () => {
    it("should evaluate numbers are even", () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(0)).toBe(true);
        expect(isEven(-4)).toBe(true);
    })

    it("should evaluate numbers are not even", () => {
        expect(isEven(3)).toBe(false);
        expect(isEven(1)).toBe(false);
        expect(isEven(-7)).toBe(false);
        expect(isEven(9)).toBe(false);
    })
})

describe("days of the week tests", () => {
    it("should return the correct day for valid day numbers", () => {
        expect(getDayOfTheWeek(2)).toBe('Tuesday');
        expect(getDayOfTheWeek(1)).toBe('Monday');
        expect(getDayOfTheWeek(7)).toBe('Sunday');
    })

    it("should return invalid statement for days out of range", () => {
        expect(getDayOfTheWeek(0)).toBe('Invalid day number');
        expect(getDayOfTheWeek(8)).toBe('Invalid day number');
        expect(getDayOfTheWeek(-1)).toBe('Invalid day number');
    })
})

describe("letter grade tests", () => {
    it("should correctly classify A", () => {
        expect(classifyLetterGrade(95)).toBe('A');
        expect(classifyLetterGrade(90)).toBe('A');
    })
    it("should correctly classify B", () => {
        expect(classifyLetterGrade(85)).toBe('B');
        expect(classifyLetterGrade(80)).toBe('B');
    })
    it("should correctly classify C", () => {
        expect(classifyLetterGrade(75)).toBe('C');
        expect(classifyLetterGrade(70)).toBe('C');
    })
    it("should correctly classify D", () => {
        expect(classifyLetterGrade(65)).toBe('D');
        expect(classifyLetterGrade(60)).toBe('D');
    })
    it("should correctly classify F", () => {
        expect(classifyLetterGrade(55)).toBe('F');
        expect(classifyLetterGrade(0)).toBe('F');
    })
})