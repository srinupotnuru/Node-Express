const express= require('express')
const http=require('http');
const morgan=require('morgan');
const bodyParser = require('body-parser');



const hostname='localhost';
const port=2104;

const app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));

const dishRouter = require('./routes/dishRouter');
app.use('/dishes', dishRouter);

const promoRouter = require('./routes/promoRouter');
app.use('/promotions', promoRouter);

const leaderRouter = require('./routes/leaderRouter');
app.use('/leadership', leaderRouter);

app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(`this is server`);
});


const server=http.createServer(app);
server.listen(port,()=>{
    console.log(`running at port ${port}`);
});