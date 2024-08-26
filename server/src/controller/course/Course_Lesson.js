const { Course_Lesson } = require("../../database/models/index");

const getCourseLessonData = async (req, res) => {
    try {
        const data = await Course_Lesson.findAll();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const getCourseLessonDataWithId = async (req, res) => {
    const id = req.params.id;
    try {
        const data = Course_Lesson.findeOne({
            where: {
                id: id
            }
        })
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const addCourseLessonData = async (req, res) => {
    const data = {
        title: req.body.title,
        duration: req.body.duration,
        course_id: req.body.course_id,
        section_id: req.body.section_id,
        lesson_type: req.body.lesson_type,
        url: req.body.url,
        description: req.body.description,
        minimum_duration: req.body.minimum_duration,
        drip_content: req.body.drip_content,
        order: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    try {
        const courseCoupondate = await Course_Lesson.create(data);
        res.staus(200).json(courseCoupondate);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const updateCourseLessonData = async (req, res) => {
    const id = req.params.id;
    const data = {
        title: req.body.title,
        duration: req.body.duration,
        course_id: req.body.course_id,
        section_id: req.body.section_id,
        lesson_type: req.body.lesson_type,
        url: req.body.url,
        description: req.body.description,
        minimum_duration: req.body.minimum_duration,
        drip_content: req.body.drip_content,
        updatedAt: new Date(),
    }
    try {
        const courseCoupondate = await Course_Lesson.update(data, {
            where: {
                id: id
            }
        });
        res.status(200).json(courseCoupondate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteCourseLessonData = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Course_Lesson.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {
    getCourseLessonData,
    getCourseLessonDataWithId,
    addCourseLessonData,
    updateCourseLessonData,
    deleteCourseLessonData
}