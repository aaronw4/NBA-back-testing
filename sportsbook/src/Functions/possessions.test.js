import { possessions } from "./possessions";

it('Returns expected value', () => {
    expect(possessions(10, 5, 2, 1)).toBe(15)
    expect(possessions(20, 2, 10, 2)).toBe(25)
})