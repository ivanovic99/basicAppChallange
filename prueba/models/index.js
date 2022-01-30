const Post = require("./Post")
const User = require("./User")
const sequelize = require("sequelize")

User.hasMany(Post, {as: 'post', foreingKey: "userId"})
Post.belongsTo(User, {as: "user"})

// sequelize.sync({alter: true}).then(() => {
// }).catch(err => console.log(err))