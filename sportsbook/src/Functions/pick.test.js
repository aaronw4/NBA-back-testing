import { pickSpread, pickTotal } from "./pick";

it ('pickSpread returns correct array', () => {
    expect(pickSpread('+5', '+10', '4')).toStrictEqual(['Away', 10])
    expect(pickSpread('+15', '+10', '2')).toStrictEqual(['Home', -10])
    expect(pickSpread('-12', '-6', '4')).toStrictEqual(['Away', -6])
    expect(pickSpread('+2', '-4', '3')).toStrictEqual(['Home', 4])
})

it ('pickTotal returns correct string', () => {
    expect(pickTotal('120', '130', '4')).toBe('Under')
    expect(pickTotal('140', '135', '2')).toBe('Over')
})

it ('both return no bet when difference is small', () => {
    expect(pickSpread('+9', '+10', '4')[0]).toBe('No bet')
    expect(pickSpread('+11', '+10', '4')[0]).toBe('No bet')
    expect(pickSpread('-4', '-6', '4')[0]).toBe('No bet')
    expect(pickSpread('-8', '-6', '4')[0]).toBe('No bet')
    expect(pickTotal('129', '130', '4')).toBe('No bet')
    expect(pickTotal('137', '135', '6')).toBe('No bet')
})