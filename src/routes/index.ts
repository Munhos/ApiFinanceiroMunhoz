import { Router } from 'express';
import { salvarDados } from '../controller';

const router = Router();

router.get('/', salvarDados.getAll);
router.get('/:id', salvarDados.getOne);
router.post('/', salvarDados.post);
router.put('/:id', salvarDados.update);
router.delete('/:id', salvarDados.delete);

export default router;
