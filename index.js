const express = require('express');
const path = require('path');
const hb   = require('express-handlebars');
const app = express();
const mainRouter = require('./views/routes/home');
const addRouter = require('./views/routes/add');
const coursesRouter = require('./views/routes/courses');

const hbs = hb.create({
 defaultLayout: 'main',
 extname: 'hbs'   
})
app.engine('hbs',hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(__dirname));
//
const PORT = process.env.PORT || 3000;
//logic
app.use(express.urlencoded({extended: true}))
app.use(mainRouter);
app.use(addRouter);
app.use(coursesRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} port!`)
})