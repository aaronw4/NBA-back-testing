export function freeThrows(points, threes, fieldGoals) {
    let FT = points - 3*threes - 2*(fieldGoals - threes)
    
    return FT
}