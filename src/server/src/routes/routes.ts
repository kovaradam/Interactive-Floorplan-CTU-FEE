import { Router } from 'express'

import { getPerson} from '../controllers/person'
import { getPath } from '../controllers/path'

const router = Router();

router.get('/people/:username', getPerson);

router.get('/path/:startId/:endId/:accessibility', getPath);

export default router;
