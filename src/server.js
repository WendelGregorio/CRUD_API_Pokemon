const app = require('./app');

app.listen(process.env.PORT || 3000, async () => {
    return console.log("server is running");
});

