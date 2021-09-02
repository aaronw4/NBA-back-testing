export function oddsToMoneyline(odds) {
    let decimalML = ((100 - odds) / odds) + 1
    let moneyline

    if (decimalML >= 2) {
        moneyline = (decimalML - 1) * 100
    } else {
        moneyline = -100 / (decimalML - 1)
    }

    return moneyline
}