// Create a new 'render' controller method
exports.render = function(req, res) {
    // Set the safe user object
    const user = (!req.user) ? null : {
        _id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName
    };
    //设置没有情况下为null 有的话为后面的对象

    // Use the 'response' object to render the 'index' view with a 'title' and 'user' properties
    res.render('index', {
        title: 'Hello World',
        user: JSON.stringify(user)
    });
};