import { sum } from "../sum";

test("Sum Function should calculate the sum of two numbers", () => {

    const result = sum(3,4);

    expect(result).toBe(7);
});