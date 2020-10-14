const express = require('express');
const instance = express();
const routes = require('./routes');
instance.use(express.json());
instance.use('/api',routes);

instance.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});


instance.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});


instance.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
});

export const app = instance;
