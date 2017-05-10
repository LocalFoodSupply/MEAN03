module.exports = function (app, passport) {

    //model
    var Category = require('../models/catergory.server.model');

    //取得user model



    app.post('/api/category/add', function (req, res) {
        var category = new Category(req.body);
        category.save(function (err, category) {
            res.json({
                category: category
            });
        });
    });

    // 取得所有產品分類
    app.get('/api/category/list', function (req, res) {
        Category.find({}, function (error, categories) {
            if (error) {
                return res.
                status(status.INTERNAL_SERVER_ERROR).
                json({
                    error: error.toString()
                });
            }
            console.log("categories got!");
            res.json({
                categories: categories
            });
        });
    });





    // app.get('*', function (req, res) {
    //   // res.send('Page Not found!');
    //   res.sendFile(path.join(__dirname, 'dist/index.html'));
    // });


};