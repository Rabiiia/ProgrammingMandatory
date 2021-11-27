let summoners;


fetch("https://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/summoner.json")
    .then(response => response.json()
        .then(data => {
           summoners = Object.values(data.data)
           // console.log(summoners.image.full)
            summoners.map(summoner => createNewSummoner(summoner))

        }));



function createNewSummoner(summoner) {
    const newSummoner = {
        name: summoner.name,
        summonerLevel: summoner.summonerLevel,
        image: "https://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/" + summoner.image.full
    }

    fetch(baseURL + "/summoners", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newSummoner)

    }).then(response=> console.log("im here"))
        .catch(error => console.log("Network related error:", error))
}

