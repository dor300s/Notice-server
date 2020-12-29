module.exports = {
  "dbURL": `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.egtyt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
}