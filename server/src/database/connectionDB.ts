import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hospitaldb', 'admin_Hospital', 'admin_Hospital.@7', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;