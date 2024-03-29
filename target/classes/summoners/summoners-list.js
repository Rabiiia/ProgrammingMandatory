const summonerList = document.getElementById("create-summoners-list");


fetch("https://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/summoner.json")
    .then(response => response.json()
        .then(data => {
            summoners = Object.values(data.data)
            summoners.map(summoner => createSummoner(summoner))

        }));

function createSummoner(summoner) {
    const summonerElement = document.createElement("div");
    summonerElement.innerHTML = `
        <p>SummonerName: ${(summoner.name)}</p>
        <p>SummonerLevel: ${(summoner.summonerLevel.toString())}</p>
        <img src="${("https://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/" + 
        summoner.image.full)}" width="110">

    `;

    summonerList.appendChild(summonerElement);
}