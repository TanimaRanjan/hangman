const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            // console.log(data)
            callback(undefined, data.puzzle)
        } else if(e.target.status === 400) {
            callback('An Error has taken place', undefined)
        }
    })
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getPuzzleSync = () => {
    
    const request = new XMLHttpRequest()
    
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2', false)
    request.send()
    if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        return data.puzzle
        // callback(undefined, data.puzzle)
    } else if(request.status === 400) {
        // callback('An Error has taken place', undefined)
        throw new Error('Things did not go well')
    }
}

const getCountry = (countryCode, callback) => {
    // const countryCode = 'MX'
    const countryReq = new XMLHttpRequest()
    countryReq.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)
            
        } else if(e.target.status === 400) {
            throw new Error('Bad response', undefined)
        }
    })
    countryReq.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryReq.send()
}