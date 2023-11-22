import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ng_hospital_db', 'admin_Hospital', 'admin_Hospital.@7', {
    host: 'localhost',
    dialect: 'mysql',
  });

  export default sequelize