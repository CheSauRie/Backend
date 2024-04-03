'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Messages', 'url_references', {
      type: Sequelize.TEXT,
      allowNull: true, // Giữ nguyên thuộc tính này như cũ hoặc cập nhật tùy vào nhu cầu của bạn
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Messages', 'url_references', {
      type: Sequelize.STRING,
      allowNull: true, // Đảm bảo thuộc tính này phù hợp với tình trạng cột trước khi migration
    });
  },
};
