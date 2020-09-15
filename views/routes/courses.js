const {Router} = require('express');
const Course = require('../../models/course')
//Const Courses = require('../')
const router = Router();

router.get('/courses', async (req, res) => {
    const courses = await Course.getAll()
    res.render('courses', {
      title: 'Курсы',
      isCourses: true,
      courses
    })
  })

  router.get('/courses/:id', async(req,res)=>{

const course = await Course.getById(req.params.id)
//console.log(req.param.id);
res.render('course', {
  layout: 'empty',
  title: `Курс ${course.title}`,
  course
})
  })
  
  module.exports = router