const express = require("express");
const session = require("express-session");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const routes = require('./routes/router')
const port = process.env.PORT || 3000
const cookieParser = require('cookie-parser');
const path = require('path');

const { createProxyMiddleware } = require('http-proxy-middleware');



app.set('view engine', 'ejs')
const sessionMiddleware = (session({
    secret: 'bowaShoesSeller',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false, maxAge: 3600000 } // 可選的 cookie 設定
}))
const cors = require('cors')



// app.use(cors({
//     origin: 'http://localhost:6400'
// }))
app.use(cookieParser());
app.use((err, req, res, next) => {
    console.error("An unhandled error occurred:", err);
});

app.use(sessionMiddleware)
io.use((socket, next) => {
    sessionMiddleware(socket.request, socket.request.res, next);
});


app.use(session({
    secret: 'bowaShoesSeller',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'dist')));

// createProxyMiddleware({
//     target: 'https://192.168.43.115:6400',
//     secure: false,
//     changeOrigin: true,
//   });
//   app.get('/',(req,res)=> {
//     res.send("HELLO")})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
app.use('/', routes)

const socketIo = require('./socketIO')
io.on('connection', (socket) => {
    console.log('連線');
    socketIO(socket)                //進行socket事件調用
})

httpServer.listen(port, () => {
    console.log(`http://localhost:${port}`);
})