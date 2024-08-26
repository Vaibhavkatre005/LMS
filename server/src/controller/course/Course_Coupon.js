const { Course_Coupon } = require("../../database/models/index");

const getCourseCouponData = async (req, res) => {
    try {
        const data = await Course_Coupon.findAll();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const getCourseCouponDataWithId = async (req, res) => {
    const id = req.params.id;
    try {
        const data = Course_Coupon.findeOne({
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


const addCourseCouponData = async (req, res) => {
    const data = {
        coupon_code: req.body.coupon_code,
        discount_in_percentage: req.body.discount_in_percentage || null,
        discount_in_amount: req.body.discount_in_amount || null,
        expired_date: req.body.expired_date,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    try {
        const courseCoupondate = await Course_Coupon.create(data);
        res.staus(200).json(courseCoupondate);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const updateCourseCouponData = async (req, res) => {
    const id = req.params.id;
    const data = {
        coupon_code: req.body.coupon_code,
        discount_in_percentage: req.body.discount_in_percentage || null,
        discount_in_amount: req.body.discount_in_amount || null,
        expired_date: req.body.expired_date,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    try {
        const courseCoupondate = await Course_Coupon.update(data, {
            where: {
                id: id
            }
        });
        res.status(200).json(courseCoupondate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteCourseCouponData = async (req, res) => {
    const id = req.params.id;
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
    getCourseCouponData,
    getCourseCouponDataWithId,
    addCourseCouponData,
    updateCourseCouponData,
    deleteCourseCouponData
}