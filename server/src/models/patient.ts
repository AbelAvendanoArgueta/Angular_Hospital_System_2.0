import { DataTypes } from 'sequelize';
import database from '../database/connectionDB';

// Define the 'Patient' model using Sequelize
const Patient = database.define('patient', {
    // Define the 'name' attribute with a data type of STRING
    name: { 
        type: DataTypes.STRING
    },
    // Define the date of birth attribute with a data type of STRING
    contact: {
        type: DataTypes.NUMBER 
    },
    // Define the 'price' attribute with a data type of DOUBLE
    dob: {   
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

// Export the 'Patient' model for use in other parts of the application
export default Patient;
