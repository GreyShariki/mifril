module.exports = (sequelize, DataTypes) =>{
    const order = sequelize.define("order", {
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
    return order
}