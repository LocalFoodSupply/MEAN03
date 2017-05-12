
/*var Category =require('../models/catergory.server.model');
var Product = require('../models/product.server.model');

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        console.error(err, statusCode);
        res.status(statusCode).send(err);
    };
}

function responseWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
        if (entity) {
            res.status(statusCode).json(entity);
        }
    };
}

function productsInCategory(productcategory)
{  var categoryid = [productcategory._id].concat(productcategory.children);
    return Product
        .find({'category':categoryid}).populate('category')
        // 將category path替換成對應的資料
        .exec(function (err, products) {
            if (err) return next(err);
            // 取到資料就回傳json
            res.json({
                products: products
            });
        }).catch(handleError(res));}


exports.productcategory=function(req, res, next){
Category
    .findOne({title:req.params.id})
    .then(productsInCategory)
    .catch(handleError(res));}; */


exports.renderproduct= function(req, res, next) {
    // If user is not connected render the signin page, otherwise redirect the user back to the main application page
    if (!req.user) {
        // Use the 'response' object to render the signin page
        res.render('product', {
            // Set the page title variable
            title: 'add product',
            // Set the flash message variable
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/');
    }
};
