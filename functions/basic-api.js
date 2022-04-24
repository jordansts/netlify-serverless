// domain/.netlify/functions/hello
// exports

// const person = {name: 'Jhon'}

const items = require('../assets/data')


exports.handler = async (event, context) => {
    // console.log(event)
    // console.log(context)
    return {
        //important! this line allows other domains to send requests to our api avoiding cors error
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify(items)
    }
}