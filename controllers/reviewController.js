const db = require('../models')

// model
const Review = db.Review

// functions

//1. Add Review

const addReview = async (req, res) => {

    const id = req.params.id

    let data = {
        // product_id: id,
        ratings: req.body.rating,
        description: req.body.description,
        productId: id
    }

    const review = await Review.create(data)
    res.status(200).send(review)

}


// 2. Get All Reviews

const getAllReviews = async (req, res) => {

    const reviews = await Review.findAll({})
    res.status(200).send(reviews)

}

module.exports = {
    addReview,
    getAllReviews
}