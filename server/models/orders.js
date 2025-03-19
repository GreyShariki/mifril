module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define("order", {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return order;
};
