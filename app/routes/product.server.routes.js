
module.exports = function (app, passport) {

    //model

    var Product = require('../models/product.server.model');



    //localhost:3000/api/productName
    app.get('/about', function (req, res) {
        console.log(req.session);
        res.send('my about page');
    });




    //用category id取得對應products
    app.get('/api/products/category/:id', function(req,res,next){Product
        .find({'category':req.params.id}).populate('category')
        // 將category path替換成對應的資料
        .exec(function (err, products) {
            if (err) return next(err);
            // 取到資料就回傳json
            res.json({
                products: products
            });
        })});

    app.get('/api/products/search/:id', function (req, res, next) {
        Product
            .find({ $text: { $search: req.params.id}},{ score : { $meta: "textScore" }
            }).sort({ score : { $meta : 'textScore' } }).populate('category')
        // 將category path替換成對應的資料
            .exec(function (err, products) {
                if (err) return next(err);
                // 取到資料就回傳json
                res.json({
                    products: products
                });
            });
    });
    //取得所有product
    app.get('/api/products', function (req, res) {
        //空{}代表傳回Category下所有document
        Product.find({}).populate('category')
            .exec(function (error, products) {
                if (error) {
                    return res.status(500).json({
                        error: error.toString()
                    });
                }
                res.json({
                    products: products
                });
                // res.json(products);
            });
    });
   app.post('/api/product',function (req,res) {
        product =new Product(req.body);
        product.save((err) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.status(200).json(product);}
    })});

    // 用product_id找product
    app.get('/api/product/:id', function (req, res) {
        Product.findOne({
            _id: req.params.id
        }, function (err, product) {
            if (err) return next(err);
            //回傳json
            res.json({
                product: product
            });
        })
    });
}

