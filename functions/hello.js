// domain/.netlify/functions/hello
// exports

// const person = {name: 'Jhon'}

exports.handler = async (event, context) => {
    // console.log(event)
    // console.log(context)
    return {
        statusCode: 200,
        // body: JSON.stringify(person)
        body: 'My First Netlify Function'
    }
}