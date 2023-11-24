// Define the structure of a drug object
export interface Drug {
    id?: number;         // Optional property for the drug's ID (may not be present for new drugs)
    name: string;        // Required property for the drug's name
    description: string; // Required property for the drug's description
    price: number;       // Required property for the drug's price
    stock: number        // Required property for the drug's stock quantity
}
