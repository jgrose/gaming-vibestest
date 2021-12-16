// attaching function to exports
exports.handler = async () => {
    // log to console when this function runs so we can see where console logs are output
    console.log('function ran')

    // creat a constant and set it equal to an object with three properties, name age and job
    const data = { name: 'josh', age: 38, job: 'be awesome'}

    // return response to browser
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }

}