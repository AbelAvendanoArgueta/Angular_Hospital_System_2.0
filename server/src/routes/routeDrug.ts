import { Router } from 'express';
import { deleteDrug, getDrug, getDrugs, postDrug, putDrug } from '../controllers/controllerDrug';

// Create an Express router
const router = Router();

// Define routes for CRUD operations on drugs

// Route to get a list of all drugs
router.get('/', getDrugs);

// Route to get information about a specific drug by ID
router.get('/:id', getDrug);

// Route to delete a drug by ID
router.delete('/:id', deleteDrug);

// Route to add a new drug
router.post('/', postDrug);

// Route to update a drug by ID
router.put('/:id', putDrug);

// Export the router for use in other parts of the application
export default router;
