require('dotenv').config();
const express=require('express');

const usergetrouter=require('./Router/userRouter');
const router=require('./Router/loginRoute');
const regrouter=require('./Router/registerRouter')
const authentication=require('./middleware/authentication')

const app=express();
app.use(express.json());
app.use('/login',router);
app.use('/register',regrouter)

app.use('/getuser',authentication,usergetrouter);

const port=process.env.PORT;
app.listen(port);