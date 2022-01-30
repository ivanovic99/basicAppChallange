const Sequelize = require("sequelize")
const db = require("../config/db")
const User = require("./User")

const Post = db.define("Post", {

    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        notNull: true
    },
    content: {
        type: Sequelize.STRING,
        notNull: true   
    },
    userId: {
        type: Sequelize.STRING,
        notNull: true
    }
})


module.exports = Post