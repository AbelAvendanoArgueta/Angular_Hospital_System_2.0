import { DataTypes } from 'sequelize';
import database from '../database/connectionDB';

const Drug = database.define('drug', {
    name:  
        { 
        type: DataTypes.STRING
        },
    description:
        {
        type: DataTypes.STRING 
        },
    price: 
        {   
        type: DataTypes.DOUBLE 
        },
    stock:
        {
        type: DataTypes.NUMBER
        }
}, {
    createdAt: false,
    updatedAt: false,
}
);

export default Drug;