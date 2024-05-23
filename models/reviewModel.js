// models/review.js
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("Review", {
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        productId: {
            type: DataTypes.TEXT
        }
    });

    Review.associate = function associate(models) {
        Review.belongsTo(models.Product, {
            foreignKey: 'productId'
        })
    }

    return Review;
};
