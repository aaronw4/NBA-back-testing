import { oddsToMoneyline } from "./oddsToMoneyline";

it('Returns the correct value', () => {
    expect(oddsToMoneyline(75).toFixed(0)).toBe("-300")
    expect(oddsToMoneyline(50).toFixed(0)).toBe("100")
    expect(oddsToMoneyline(40).toFixed(0)).toBe("150")
})