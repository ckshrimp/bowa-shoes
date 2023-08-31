const express = require("express");
const session = require("express-session");
const app = express();
const httpServer = require("http").createServer(app);
const routes = require('./routes/router')
const port = process.env.PORT || 6400
const cookieParser = require('cookie-parser');
const path = require('path');

app.set('view engine', 'ejs')

const cors = require('cors')

// app.use(cors({
//     origin: 'http://localhost:6400'
// }))
app.use(cookieParser());
app.use((err, req, res, next) => {
    console.error("An unhandled error occurred:", err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'dist')));



app.use('/api', routes)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

httpServer.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

