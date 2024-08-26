const { Course_Category } = require("../../database/models/index");

const getCourseCategoryData = async (req, res) => {
    try {
        const data = await Course_Category.findAll();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const getCourseCategoryWithId = async (req, res) => {
    const id = req.params.id;
    try {
        const data = Course_Category.findeOne({
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

const addCourseCategoryData = async (req, res) => {
    const data = {
        cate_title: req.body.cate_title,
        cate_parent_id: req.body.cate_parent_id || null,
        cate_thumbnail: req.body.cate_thumbnail || null,
        status: 1,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    try {
        const courseCatedate = await Course_Category.create(data);
        res.staus(200).json(courseCatedate);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const updateCourseCategoryData = async (req, res) => {
    const id = req.params.id;
    const curentcoursecate = await User.findOne({ where: { id } });
    if (!curentcoursecate) {
        return res.status(404).json({ message: 'User not found' });
    }
    if (curentcoursecate && curentcoursecate.cate_thumbnail) {
        const imagePath = path.join(__dirname, '../../client/public/upload', curentcoursecate.cate_thumbnail);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }
    const data = {
        cate_title: req.body.cate_title,
        cate_parent_id: req.body.cate_parent_id || null,
        cate_thumbnail: req?.body?.cate_thumbnail || null,
        status: 1,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by,
        updatedAt: new Date(),
    }
    try {
        const courseCatedate = await Course_Category.update(data, {
            where: {
                id: id
            }
        });
        res.status(200).json(courseCatedate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteCourseCategoryData = async (req, res) => {
    const id = req.params.id;
    const curentcoursecate = await User.findOne({ where: { id } });
    if (!curentcoursecate) {
        return res.status(404).json({ message: 'User not found' });
    }
    if (curentcoursecate && curentcoursecate.cate_thumbnail) {
        const imagePath = path.join(__dirname, '../../client/public/upload', curentcoursecate.cate_thumbnail);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }
    try {
        const data = await Course_Category.destroy({
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
    getCourseCategoryData,
    getCourseCategoryWithId,
    addCourseCategoryData,
    updateCourseCategoryData,
    deleteCourseCategoryData
}