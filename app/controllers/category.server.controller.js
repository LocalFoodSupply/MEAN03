exports.rendercategory= function(req, res, next) {

    // If user is not connected render the signin page, otherwise redirect the user back to the main application page
    if (!req.user) {
        // Use the 'response' object to render the signin page
        res.render('category', {
            // Set the page title variable
            title: 'add category',
            // Set the flash message variable
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/');
    }
};