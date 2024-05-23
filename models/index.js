const dbConfig = require('../config/db.config.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.Product = require('./productModel.js')(sequelize, DataTypes)
// console.log(db.products,"..........")
db.Review = require('./reviewModel.js')(sequelize, DataTypes)
// console.log(db.reviews,"..........")

console.log(db,'dbbbbbbb')

// db.sequelize.sync({ force: false })
// .then(() => {
//     console.log('yes re-sync done!')
// })

db.Query = db.sequelize
// Set up associations
Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});


module.exports = db












// 1 to Many Relation

// db.products.hasMany(db.reviews, {
//     foreignKey: 'product_id',
//     as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })


