function hiddenCard() {
    const card = document.querySelector(".card")

    card.style.display="none"
}

function fetchCountry() {
    const searchInput = document.querySelector(`input[type="text"]`).value

    const url = `https://restcountries.com/v3.1/name/${searchInput}?fullText=true`

    const imageFlag = document.querySelector("#flag")
    const countryTitle = document.querySelector(".card-title")
    const continent = document.querySelector("#continente")
    const capital = document.querySelector("#capital")
    const population = document.querySelector("#populacao")
    const card = document.querySelector(".card")

    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if(!data[0]) 
                alert("País não encontrado!")

            card.style.display="block"
            imageFlag.src=data[0].flags.png
            countryTitle.innerHTML=data[0].name.common
            continent.innerHTML=data[0].continents[0]
            capital.innerHTML=data[0].capital[0]
            population.innerHTML=data[0].population
        })

}