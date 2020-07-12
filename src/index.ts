import fs from 'fs'

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map((row: string): string[] => {
        return row.split(',')
    })

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}


const printMatchResult = (): MatchResult => {
    if (match[5] === 'H') {
        return MatchResult.HomeWin
    }

    return MatchResult.AwayWin
}

let manUnitedWins = 0

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++
    }
}

console.log(`Man United won: ${manUnitedWins} games`)