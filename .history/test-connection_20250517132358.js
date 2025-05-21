// test-connection.js
const sequelize = require('./db');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to the database!');
  } catch (error) {
    console.error('❌ Unable to connect:', error);
  }
})();