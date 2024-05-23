// models/product.js
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    });

    Product.associate = function associate(models) {
        Product.belongsTo(models.Review, {
            foreignKey: 'productId'
        })
    }
    return Product;
};
