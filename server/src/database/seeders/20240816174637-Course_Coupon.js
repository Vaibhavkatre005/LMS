'use strict';
const moment = require('moment-timezone');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const expire = moment.tz('2024-11-09', 'America/Toronto').unix();
    const create = moment.tz('2023-10-05', 'America/Toronto').unix();
    const update = moment.tz('2022-12-06', 'America/Toronto').unix();
    return queryInterface.bulkInsert('course_coupons', [
      {
        coupon_code: '45&AD#FG',
        discount_in_percentage: 10,
        discount_in_amount: null,
        expired_date: expire,
        status: 1,
        createdAt: create,
        updatedAt: update,
      },
      {
        coupon_code: '75&VD#FL',
        discount_in_percentage: null,
        discount_in_amount: 300,
        expired_date: expire,
        status: 0,
        createdAt: create,
        updatedAt: update,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('course_coupons', null, {});
  },
};
