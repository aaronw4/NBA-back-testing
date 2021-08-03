export function pickSpread(projecteAwayLine, actualAwayLine, difference) {
    let pick
    let condition

    if (projecteAwayLine === '') {
        pick = 'No bet'
        condition = ''
    } else if (Number(actualAwayLine) - Number(projecteAwayLine) >= Number(difference)) {
        pick = 'Away'
        condition = Number(actualAwayLine)
    } else if (Number(actualAwayLine) - Number(projecteAwayLine) <= -Number(difference)) {
        pick = 'Home'
        condition = -1 * Number(actualAwayLine)
    } else {
        pick = 'No bet'
        condition = ''
    }

    return [pick, condition]
}

export function pickTotal(projecteTotal, lineTotal, difference) {
    let pick

    if (projecteTotal === '' || lineTotal === '') {
        pick = 'No bet'
    } else if (Number(lineTotal) - Number(projecteTotal) >= Number(difference)) {
        pick = 'Under'
    } else if (Number(lineTotal) - Number(projecteTotal) <= -Number(difference)) {
        pick = 'Over'
    } else {
        pick = 'No bet'
    }
    
    return pick
}