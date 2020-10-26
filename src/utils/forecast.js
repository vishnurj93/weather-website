const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b1c2d27d118ee68bb3f6fdc36b94c09c&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+ body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast