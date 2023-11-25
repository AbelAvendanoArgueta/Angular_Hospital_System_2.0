import { Sequelize } from 'sequelize';

// Create a Sequelize instance for connecting to the MySQL database
const sequelize = new Sequelize('hospitaldb', 'root', 'root', {
    // Specify the database host
    host: 'localhost',
    // Specify the database dialect (in this case, MySQL)
    dialect: 'mysql'
});

// Export the Sequelize instance for use in other parts of the application
export default sequelize;
