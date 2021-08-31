export function totalCount(dataType, resultsData) {
    let resultKeys = Object.keys(resultsData)
    let pointsAway = []
    let pointsHome = []
    let projPointsAway = []
    let projPointsHome = []

    resultKeys.map(date => {
        resultsData[date].map(game => {
            if (game.score_away === 'Cancelled') {
                let nothing = 0
            } else {
                pointsAway.push(game.score_away)
                pointsHome.push(game.score_home)
                projPointsAway.push(game[dataType+'ScoreAway'])
                projPointsHome.push(game[dataType+'ScoreHome'])
            }        
        })
    })
    
    // points = points.filter((item) => item !== 'Cancelled')
    function reducer(total, num) {
        return total + num
    }

    let pointsAwayTotal = pointsAway.reduce(reducer)
    let pointsHomeTotal = pointsHome.reduce(reducer)
    let pointsTotal = pointsAwayTotal + pointsHomeTotal
    let pointsAwayAvg = pointsAwayTotal / pointsAway.length
    let pointsHomeAvg = pointsHomeTotal / pointsHome.length  
    let pointsAvg = pointsTotal / pointsAway.length
    
    let projPointsAwayTotal = projPointsAway.reduce(reducer)
    let projPointsHomeTotal = projPointsHome.reduce(reducer)
    let projPointsTotal = projPointsAwayTotal + projPointsHomeTotal
    let projPointsAwayAvg = projPointsAwayTotal / projPointsAway.length
    let projPointsHomeAvg = projPointsHomeTotal / projPointsHome.length
    let projPointsAvg = projPointsTotal / projPointsAway.length
    

    return({
        pointsAwayAvg: pointsAwayAvg.toFixed(1),
        pointsHomeAvg: pointsHomeAvg.toFixed(1),
        pointsAvg: pointsAvg.toFixed(1),
        projPointsAwayAvg: projPointsAwayAvg.toFixed(1),
        projPointsHomeAvg: projPointsHomeAvg.toFixed(1),
        projPointsAvg: projPointsAvg.toFixed(1)
    })
}