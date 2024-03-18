import { numberPrinter } from "./loops-practice";

describe("loops practice", () => {
    it("should be able to print the number passed to it", () => {
        expect(numberPrinter(5)).toBe("five");
        expect(numberPrinter(1)).toBe("one");
        expect(numberPrinter(8)).toBe("eight");
        expect(numberPrinter(0)).toBe("Not found");
        expect(numberPrinter(11)).toBe("Not found");
    })
})