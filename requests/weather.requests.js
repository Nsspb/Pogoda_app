const { error } = require('console')
const rp = require('request-promise')

module.exports =  async function (city){
    if (!city) {
        throw new Error ('Нет города')
    }
console.log('city:', city)
} 