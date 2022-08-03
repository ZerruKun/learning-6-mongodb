const {MongoClient} = require("mongodb")

const client = new MongoClient("mongodb://127.0.0.1:27017/mongo")

const start = async () => {
    try {
        await client.connect();
        console.log("Подключение установлено");
        await client.db().createCollection("users");
        const users = client.db().collection("users");
        await users.insertOne({name: "Nick", age: 33});
        const user = await users.findOne({name: "Nick"})
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

start()