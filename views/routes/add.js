const {Router} = require('express');
const Course = require('../../models/course')
const router = Router();


router.get('/add', (req, res)=> {
    res.render('add',{
        title: 'Добавить курс',
        isAdd: true
    })
})
//добавление курса по кнопке
router.post("/add", (req,res)=>{
//console.log(req.body);
const course = new Course (req.body.title, req.body.price, req.body.img);
course.save();
res.redirect('/courses');
})


module.exports = router;