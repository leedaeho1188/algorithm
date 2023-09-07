function solution(players, callings) {
   const keyPlayers = {};
    const keyRanks = {};

    players.forEach((player, index) => {
        const rank = index + 1;
        keyPlayers[player] = rank;
        keyRanks[rank] = player;
    })

    callings.forEach((calling, index) => {
        const lose_player = keyRanks[keyPlayers[calling]-1];

        keyRanks[keyPlayers[calling]] = lose_player;
        keyRanks[keyPlayers[lose_player]] = calling;
        keyPlayers[calling] -= 1;
        keyPlayers[lose_player] += 1;
    })

    return Object.values(keyRanks);
}