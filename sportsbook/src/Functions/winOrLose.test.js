import { WinOrLoseSpread, WinOrLoseTotal } from "./winOrLose";

it ('Picks spread outcomes correctly', () => {
    expect(WinOrLoseSpread('120', '130', 'Away', '+5')).toBe('Lose')
    expect(WinOrLoseSpread('120', '130', 'Away', '+10')).toBe('Push')
    expect(WinOrLoseSpread('120', '130', 'Away', '+12')).toBe('Win')
    expect(WinOrLoseSpread('140', '130', 'Away', '-5')).toBe('Win')
    expect(WinOrLoseSpread('140', '130', 'Away', '-10')).toBe('Push')
    expect(WinOrLoseSpread('140', '130', 'Away', '-12')).toBe('Lose')
    expect(WinOrLoseSpread('120', '130', 'Home', '-5')).toBe('Win')
    expect(WinOrLoseSpread('120', '130', 'Home', '-10')).toBe('Push')
    expect(WinOrLoseSpread('120', '130', 'Home', '-12')).toBe('Lose')
    expect(WinOrLoseSpread('140', '130', 'Home', '+5')).toBe('Lose')
    expect(WinOrLoseSpread('140', '130', 'Home', '+10')).toBe('Push')
    expect(WinOrLoseSpread('140', '130', 'Home', '+12')).toBe('Win')
})

it ('Picks total outcomes correctly', () => {
    expect(WinOrLoseTotal('120', '130', 'Over', '240')).toBe('Win')
    expect(WinOrLoseTotal('120', '130', 'Over', '260')).toBe('Lose')
    expect(WinOrLoseTotal('120', '130', 'Under', '260')).toBe('Win')
    expect(WinOrLoseTotal('120', '130', 'Under', '240')).toBe('Lose')
    expect(WinOrLoseTotal('120', '130', 'Over', '250')).toBe('Push')
    expect(WinOrLoseTotal('120', '130', 'Under', '250')).toBe('Push')
})