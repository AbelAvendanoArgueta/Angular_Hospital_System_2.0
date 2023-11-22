import {Router} from 'express';
import { deleteDrug, getDrug, getDrugs, postDrug, putDrug } from '../controllers/controllerDrug';

const router = Router();

router.get('/', getDrugs)
router.get('/:id', getDrug)
router.delete('/:id', deleteDrug)
router.post('/', postDrug)
router.put('/:id', putDrug)

export default router;