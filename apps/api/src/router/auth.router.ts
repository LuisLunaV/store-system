import { Router } from 'express';
import { Auth} from '../controller/auth/Auth.controller';
const router = Router();
const auth = new Auth();

router.get('/api/v1/saludo', auth.saludo)

export default router;