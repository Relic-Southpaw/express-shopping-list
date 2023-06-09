const express = require("express")
const ExpressError = require('./expressError');
const app = express();
const routes = require('./routes')

app.use(express.json());
app.use('/items', routes);

// 404 handler
app.use(function (req, res, next) {
    return new ExpressError("Not Found", 404);
});

//generic error handler

app.use(function (err, req, res, next) {
    let status = err.status || 500;

    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
});


module.exports = app
