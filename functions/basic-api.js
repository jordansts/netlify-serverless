// domain/.netlify/functions/hello
// exports

// const person = {name: 'Jhon'}

const items = require('../assets/data')


exports.handler = async (event, context) => {
    // console.log(event)
    // console.log(context)
    return {
        statusCode: 200,
        // body: JSON.stringify(person)
        body: JSON.stringify(items)
    }
}