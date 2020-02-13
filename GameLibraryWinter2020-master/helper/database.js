if (process.env.NODE_ENV === "production") {
    module.exports = {
        mongoURI: "mongodb+srv:LaBrake:Football0130@cluster0-wiklp.mongodb.net/test?retryWrites=true&w=majority"
    }
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/gamelibrary"
    }
}