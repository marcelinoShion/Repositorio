const continents = document.querySelectorAll("#item")
const mainContent = document.querySelector("main")


fetch("https://restcountries.com/v3.1/all")
    .then((data) => {
        return data.json()
    })
    .then((res) => {
        console.log(res)
        findCountries(res, continents)
    })

function findCountries(countries, continents) {
    continents.forEach((continent, index) => {
        continent.addEventListener("click", (e) => {
            if(index == 0) {
                setCard(countries)
            }
            else if (index == 1) {
                let africanCountries = countries.filter((e) => e.continents[0] == "Africa")
                setCard(africanCountries)

            } else if (index == 2) {
                let americanCountries = countries.filter((e) => e.continents[0] == "North America" || e.continents[0] == "South America")
                setCard(americanCountries)

            } else if (index == 3) {
                let asianCountries = countries.filter((e) => e.continents[0] == "Asia")
                setCard(asianCountries)
            } else {
                let europeanCountries = countries.filter((e) => e.continents[0] == "Europe")
                setCard(europeanCountries)
            }
        })
    });
    addCards(countries)
}

function setCard(countries) {
    let child = document.querySelector(".card")

    while (child) {
        mainContent.removeChild(child)
        child = document.querySelector(".card")
    }

    addCards(countries)


}

function addCards(countries) {
    for (let i = 0; i < countries.length; i++) {
        const imgAPI = countries[i].flags.png
        const nameAPI = countries[i].name.official
        const capitalAPI = countries[i].capital[0]
        // criar uma img no js e juntar com li do html usando o id
        let divCard = document.createElement("div")
        divCard.classList.add("card")

        let divTop = document.createElement("div")
        divTop.classList.add("top")

        let divBottom = document.createElement("div")
        divBottom.classList.add("bottom")

        let img = document.createElement("img")
        img.src = imgAPI
        img.classList.add("imgDiv")

        divTop.appendChild(img)
        let name = document.createElement("p")
        name.textContent = `Name : ${nameAPI}`
        name.classList.add("description")

        divBottom.appendChild(name)

        let capital = document.createElement("p")
        capital.textContent = `Capital: ${capitalAPI}`
        capital.classList.add("description")

        divBottom.appendChild(capital)

        divCard.appendChild(divTop)
        divCard.appendChild(divBottom)


        mainContent.appendChild(divCard)




    }
}
