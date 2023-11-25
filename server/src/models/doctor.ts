import { DataTypes } from 'sequelize';
import database from '../database/connectionDB';

// Define the 'Doctor' model using Sequelize
const Doctor = database.define('doctor', {
    // Define the 'name' attribute with a data type of STRING
    name: { 
        type: DataTypes.STRING
    },
    // Define the 'description' attribute with a data type of STRING
    carnet: {
        type: DataTypes.STRING 
    },
    // Define the 'price' attribute with a data type of DOUBLE
    contact: {   
        type: DataTypes.NUMBER 
    },
    // Define the 'stock' attribute with a data type of NUMBER
    description: {
        type: DataTypes.STRING
    }
}, {
    // Disable the automatic creation of 'createdAt' and 'updatedAt' fields in the database
    createdAt: false,
    updatedAt: false,
});

// Export the 'Doctor' model for use in other parts of the application
export default Doctor;
