import { DataTypes } from 'sequelize';
import database from '../database/connectionDB';

// Define the 'Drug' model using Sequelize
const Drug = database.define('drug', {
    // Define the 'name' attribute with a data type of STRING
    name: { 
        type: DataTypes.STRING
    },
    // Define the 'description' attribute with a data type of STRING
    description: {
        type: DataTypes.STRING 
    },
    // Define the 'price' attribute with a data type of DOUBLE
    price: {   
        type: DataTypes.DOUBLE 
    },
    // Define the 'stock' attribute with a data type of NUMBER
    stock: {
        type: DataTypes.NUMBER
    }
}, {
    // Disable the automatic creation of 'createdAt' and 'updatedAt' fields in the database
    createdAt: false,
    updatedAt: false,
});

// Export the 'Drug' model for use in other parts of the application
export default Drug;
