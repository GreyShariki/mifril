module.exports = (sequelize, DataTypes) =>{
    const shop = sequelize.define("shop", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            
        }
    })
    return shop
}