// create function with two arguments - event, context
exports.handler = async (event, context) => {
    const guides = [
        { title: 'Reverse virtualziation hyper proxies, and you', speaker: 'Elon Gates'},
        { title: 'banana racecar', speaker: 'LoriBrown'},
        { title: "the biggest waffle ever", speaker: 'Josh'},
    ]

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(guides)
        }
    }


}