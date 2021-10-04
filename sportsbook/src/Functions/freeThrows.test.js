import { freeThrows } from "./freeThrows";

it('Returns correct value', () => {
    expect(freeThrows(10, 1, 2)).toBe(5)
    expect(freeThrows(10, 0, 4)).toBe(2)
})