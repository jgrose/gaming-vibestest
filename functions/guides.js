exports.handler = async (event, context) => {
    const guides = [
        { title: 'book1', author: 'me'},
        { title: 'book2', author: 'you'},
        { title: 'book3', author: 'lori'},
    ]

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(guides)
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({ mssg: 'ah, ah, ah you must be logged in to see this' })
    }

}