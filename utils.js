export function didUserWin(userGuess, computerThrow) {
    if (userGuess === 'rock' && computerThrow === 'scissors' || 
    userGuess === 'paper' && computerThrow === 'rock' || userGuess === 'scissors' && 
    computerThrow === 'paper'){
        return 'userWin';
    } else if (userGuess === computerThrow){
        return 'userTie';
    } else {
        return 'userLoss'
    }
}
