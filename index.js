/*console.log("loaded");

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => console.log(data))


async function fetchData(url) {
    const response = await fetch(url)
    return response.json()
}

async function init() {
    const data = await fetchData('https://restcountries.com/v3.1/all')
    console.log(data)
}

init();*/

/*const countryComponent = (country) => `
    <div class="country">
        <h2>${country.name.common}</h2>
        <h4>pop: ${country.population}</h4>
        <h3>area: ${country.area}</h3>
        <h5>lang: ${country.languages ? Object.keys(country.languages).map(lang => country.languages[lang]) : 'no official language'}<h5>
    </div>
    `

const init = async () => {
    const rootElement = document.querySelector('#root')

    const countriesData = await fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())

/*console.log(countriesData)*/
/*const countries = countriesData.map(countryData => {
    return {
        name: countryData.name.common,
        pop: countryData.population,
        area: countryData.area,
        lang: countryData.languages ? Object.keys(countryData.languages).map(lang => countryData.languages[lang]) : []
    }
})
    countries.map((country) => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)))
}

init()*/



/*const sortComponent = () => `
    <button class="sort">sort</button>
    `*/

const countryComponent = ({name, pop, area, lang }) => {

    //const { name, pop, area, lang } = country
    return `
    <div class="country">
        <h2>${name}</h2>
        <h4>pop: ${pop}</h4>
        <h3>area: ${area}</h3>
        <h5>lang: ${lang.join(', ')}<h5>
    </div>
    `
}

const init = async () => {
    const rootElement = document.querySelector('#root')

    const countriesData = await fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())

/*console.log(countriesData)*/
const countries = countriesData.map(countryData => {
    return {
        name: countryData.name.common,
        pop: countryData.population,
        area: countryData.area,
        lang: countryData.languages ? Object.keys(countryData.languages).map(lang => countryData.languages[lang]) : []
    }
})
    /*countries.map(country => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)))*/
    countries.forEach(country => {
        rootElement.insertAdjacentHTML('beforeend', countryComponent(country))
    });
}

init()