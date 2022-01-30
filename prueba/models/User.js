const Sequelize = require("sequelize")
const db = require("../config/db")
const Post = require("./Post")
const sequelize = require("sequelize")

const User = db.define("User", {

    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        notNull: true
    },
    email: {
        type: Sequelize.STRING,
        notNull: true
    },
    // posts: {
    //     type: Sequelize.ARRAY,
    // },
    password: {
        type: Sequelize.STRING,
        notNull: true
    }
})


User.prototype.addPost = function(post) {
    let user = this
   
    return Post.create({
        id: Date.now().toString(),
        content: post.content,
        userId: user.id
    }).then(post => {
        return post
    })
}
 
module.exports = User