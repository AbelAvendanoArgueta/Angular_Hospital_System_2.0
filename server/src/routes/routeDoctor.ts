import { Router } from 'express';
import { deleteDoctor, getDoctor, getDoctors, postDoctor, putDoctor } from '../controllers/controllerDoctor';

// Create an Express router
const router = Router();

// Define routes for CRUD operations on doctors

// Route to get a list of all doctors
router.get('/', getDoctors);

// Route to get information about a specific doctor by ID
router.get('/:id', getDoctor);

// Route to delete a doctor by ID
router.delete('/:id', deleteDoctor);

// Route to add a new doctor
router.post('/', postDoctor);

// Route to update a doctor by ID
router.put('/:id', putDoctor);

// Export the router for use in other parts of the application
export default router;
