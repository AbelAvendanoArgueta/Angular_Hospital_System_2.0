// Define the structure of a doctor object
export interface Doctor {
    id?: number;         // Optional property for the doctor's ID (may not be present for new doctors)
    name: string;        // Required property for the doctor's name
    carnet: string;      // Required property for the doctor's ID card number
    contact: number;     // Required property for the doctor's contact information
    description: number; // Required property for the doctor's description
}
