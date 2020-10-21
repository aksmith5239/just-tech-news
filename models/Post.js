const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create the Post (meaning blog posts as opposed to post method)model
class Post extends Model {}

//define the columns and fields
Post.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            isUrl: true
        }
   },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
});

module.exports = Post;
