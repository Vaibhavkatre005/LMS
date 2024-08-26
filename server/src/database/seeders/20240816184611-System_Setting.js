'use strict';
const DateToUnixNumber = require('../../middleware/DateToUnixNumber')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const date = '2023-10-05';
    const time_zone = 'America/Toronto';
    const time_zone_date = DateToUnixNumber(date, time_zone);
    return queryInterface.bulkInsert('system_settings', [
      {
        timezone: 'America/Toronto (EST)',
        currency: "USD",
        position: 'left',
        email_verification: 1,
        max_authorized_device: 2,
        createdAt: time_zone_date,
        updatedAt: time_zone_date,
      },
      {
        timezone: 'Africa/Bangui (WAT)',
        currency: "USD",
        position: 'left',
        email_verification: 0,
        max_authorized_device: 1,
        createdAt: time_zone_date,
        updatedAt: time_zone_date,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('system_settings', null, {});
  },
};
